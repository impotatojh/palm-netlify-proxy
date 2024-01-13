var getRawData = function(req) {
 var raw = req.method + ' ' + req.url + ' HTTP/1.1';
 for (var i = 0; i < req.headers.length; i+=2) {
   raw += '\r\n' + req.headers[i] + ': ' + req.headers[i+1];
 }

 if (req.body) {
   raw += '\r\n\r\n' + req.body;
 }

 return raw;
}

export default async (request, context) => {
  console.log(444, getRawData(request));
};
