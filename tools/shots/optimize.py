"""Convert rendered screenshots (JPG) into responsive WebP files used by the site.
Usage: python3 tools/shots/optimize.py   (run after tools/shots/render.mjs)"""
import glob, os
from PIL import Image

D = os.path.join(os.path.dirname(__file__), '../../public/assets/img/work')
for f in sorted(glob.glob(os.path.join(D, '*.jpg'))):
    base, name = f[:-4], os.path.basename(f)[:-4]
    im = Image.open(f).convert('RGB')
    if name.endswith('-full'):
        im.save(base + '.webp', 'WEBP', quality=72, method=6)
    elif '-m' in name[-3:]:
        im.resize((480, round(im.height * 480 / im.width)), Image.LANCZOS).save(base + '.webp', 'WEBP', quality=78, method=6)
    else:
        im.save(base + '-1440.webp', 'WEBP', quality=78, method=6)
        im.resize((720, round(im.height * 720 / im.width)), Image.LANCZOS).save(base + '-720.webp', 'WEBP', quality=80, method=6)
    os.remove(f)
print('done')
