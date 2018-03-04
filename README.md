
## Proxy Formater

Formats proxies

### Example: 
```
1. http://user:pass@127.121.115.3:23082
2. http://127.121.114.3:23082
3. 127.121.115.3:23082:user:pass
4. http://127.121.114.3:23082

Will be formated to:

1. 127.121.115.3:23082:user:pass
2. 127.121.114.3:23082
3. http://user:pass@127.121.115.3:23082
4. http://127.121.114.3:23082

```
Paste any amount of proxies into proxies.txt and run script. They will all be properly formated inside of done.txt

### How to install:
```
cd desktop
git clone https://github.com/logan-io/proxy-formater.git
cd proxy-formater

```
### After installing:
Paste all your proxies into proxies.txt then:

```
node index
```

Check done.text

