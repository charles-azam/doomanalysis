ObjC.import('PDFKit');
ObjC.import('Foundation');
function run(argv) {
  const url = $.NSURL.fileURLWithPath(argv[0]);
  const doc = $.PDFDocument.alloc.initWithURL(url);
  const n = doc.pageCount;
  let out = '';
  for (let i = 0; i < n; i++) {
    const page = doc.pageAtIndex(i);
    out += '\n===== PAGE ' + (i + 1) + ' =====\n' + ObjC.unwrap(page.string);
  }
  const s = $.NSString.alloc.initWithUTF8String(out);
  s.writeToFileAtomicallyEncodingError(argv[1], true, $.NSUTF8StringEncoding, null);
  return n + ' pages';
}
