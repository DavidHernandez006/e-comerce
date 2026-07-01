import http.client
import urllib.parse

def check_url(url):
    parsed = urllib.parse.urlparse(url)
    conn = http.client.HTTPConnection(parsed.netloc)
    conn.request("GET", parsed.path + "?" + parsed.query)
    res = conn.getresponse()
    print(f"Status for {url}: {res.status}")
    content = res.read().decode()
    return content

try:
    content = check_url("http://localhost:3000/index.html")
    if "LUMINA K-Beauty" in content:
        print("Index loads correctly")

    # Check if a product is rendered (contains tarjeta-producto)
    if "tarjeta-producto" in content:
        print("Products rendered in SSR or check main.js")

    # Since it is SPA/Dynamic, I might need to check if scripts are there
    if 'src="js/main.js" type="module"' in content:
        print("Main module script found")

except Exception as e:
    print(f"Error: {e}")
