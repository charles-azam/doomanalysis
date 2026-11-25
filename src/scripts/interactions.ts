/**
 * Every click on a chart or a legend, handled by one listener so static charts need no framework:
 * - [data-series-toggle] in [data-series-chart]: show or fade one series;
 * - [data-highlight] in [data-highlight-chart]: bring one key forward and fade the rest, click again to reset;
 * - [data-sort] in a table: sort its rows by that column, click again to reverse;
 * - [data-level] in [data-scale]: open that level's explanation, and tell any chart listening for `doom:level`.
 */
const fade = '0.12'

function toggleSeries({ button }: { button: HTMLElement }): void {
  const chart = button.closest('[data-series-chart]')
  if (chart === null) return
  const key = button.dataset.seriesToggle ?? ''
  const shown = button.getAttribute('aria-pressed') !== 'false'
  button.setAttribute('aria-pressed', shown ? 'false' : 'true')
  chart.querySelectorAll<HTMLElement | SVGElement>(`[data-series="${key}"]`).forEach((element) => {
    element.style.opacity = shown ? fade : '1'
  })
}

function highlight({ button }: { button: HTMLElement }): void {
  const chart = button.closest('[data-highlight-chart]')
  if (chart === null) return
  const key = button.dataset.highlight ?? ''
  const active = button.getAttribute('aria-pressed') === 'true'
  chart.querySelectorAll<HTMLElement>('[data-highlight]').forEach((other) => other.setAttribute('aria-pressed', 'false'))
  chart.querySelectorAll<HTMLElement | SVGElement>('[data-key]').forEach((element) => {
    element.style.opacity = active || element.dataset.key === key ? '1' : fade
  })
  if (!active) button.setAttribute('aria-pressed', 'true')
}

function sortTable({ header }: { header: HTMLElement }): void {
  const table = header.closest('table')
  const body = table?.querySelector('tbody')
  if (table === null || table === undefined || body === null || body === undefined) return
  const column = header.dataset.sort ?? ''
  const descending = header.getAttribute('aria-sort') !== 'descending'
  table.querySelectorAll('[data-sort]').forEach((other) => other.removeAttribute('aria-sort'))
  header.setAttribute('aria-sort', descending ? 'descending' : 'ascending')
  const value = (row: HTMLElement) => Number(row.dataset[`v${column}`] ?? 0)
  const rows = [...body.querySelectorAll<HTMLElement>('tr')]
  rows.sort((a, b) => (descending ? value(b) - value(a) : value(a) - value(b))).forEach((row) => body.appendChild(row))
}

function openLevel({ cell }: { cell: HTMLElement }): void {
  const scale = cell.closest('[data-scale]')
  if (scale === null) return
  const level = cell.dataset.level ?? ''
  const open = cell.getAttribute('aria-expanded') === 'true'
  scale.querySelectorAll<HTMLElement>('[data-level]').forEach((other) => {
    other.setAttribute('aria-expanded', 'false')
    other.style.outline = 'none'
  })
  scale.querySelectorAll<HTMLElement>('[data-level-detail]').forEach((detail) => {
    detail.hidden = open || detail.dataset.levelDetail !== level
  })
  if (!open) {
    cell.setAttribute('aria-expanded', 'true')
    cell.style.outline = '2px solid #0b0b0b'
    window.dispatchEvent(new CustomEvent('doom:level', { detail: { scale: (scale as HTMLElement).dataset.scale, level: Number(level) } }))
  }
}

document.addEventListener('click', (event) => {
  const target = event.target
  if (!(target instanceof Element)) return
  const series = target.closest<HTMLElement>('[data-series-toggle]')
  if (series) return toggleSeries({ button: series })
  const key = target.closest<HTMLElement>('[data-highlight]')
  if (key) return highlight({ button: key })
  const header = target.closest<HTMLElement>('[data-sort]')
  if (header) return sortTable({ header: header })
  const cell = target.closest<HTMLElement>('[data-level]')
  if (cell) return openLevel({ cell: cell })
})
