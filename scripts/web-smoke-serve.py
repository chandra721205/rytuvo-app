import http.server,os
R='/tmp/rweb'
class H(http.server.SimpleHTTPRequestHandler):
    def __init__(s,*a,**k): super().__init__(*a,directory=R,**k)
    def send_head(s):
        p=s.translate_path(s.path)
        if not os.path.exists(p) or os.path.isdir(p) and not os.path.exists(os.path.join(p,'index.html')): s.path='/index.html'
        return super().send_head()
    def log_message(s,*a): pass
http.server.ThreadingHTTPServer(('127.0.0.1',8099),H).serve_forever()
