import os
from PIL import Image

im = Image.open('reference/CORE_UnclesInSpace-Website-Reference_UIS_v01.png')

os.makedirs('public/images/gallery', exist_ok=True)
os.makedirs('public/images/entries', exist_ok=True)
os.makedirs('public/icons', exist_ok=True)

# 1. Rocket Icon in Header (around (30, 20, 68, 62))
# Let's crop the header rocket box
header_rocket = im.crop((32, 20, 68, 62))
header_rocket.save('public/icons/rocket_badge.png')

# 2. Main Uncle 0013 Image
# Left column illustration area:
main_uncle = im.crop((55, 275, 490, 845))
main_uncle.save('public/images/entries/TAXO_No0013-ExplainingTheExplanation-Main_UIS_v01.png')

# 3. Gallery thumbnails
# Let's find the 11 gallery avatar bounding boxes
# In the image, gallery avatars are between y=220 and y=308
# Width of each is around 84-88px with gaps
gallery_crops = [
    # (left, top, right, bottom)
    (32, 222, 120, 308),    # 0: Uncle Orange / Mustache
    (128, 222, 216, 308),   # 1: Uncle Green / Glasses Curly
    (224, 222, 312, 308),   # 2: Uncle Chef Hat
    (320, 222, 408, 308),   # 3: Uncle Headset
    (416, 222, 504, 308),   # 4: Uncle White Hair Green Collar
    (512, 222, 600, 308),   # 5: Uncle Peach Mustache
    (608, 222, 696, 308),   # 6: Uncle Orange Beanie
    (704, 222, 792, 308),   # 7: Uncle VR Visor
    (800, 222, 888, 308),   # 8: Uncle Blue Cap
    (896, 222, 984, 308),   # 9: Uncle Safari Hat
    (992, 222, 1080, 308),  # 10: Uncle 0013 Astronaut Helmet
]

# Gallery filenames & bg colors
gallery_meta = [
    ("TAXO_No0001-Mustache-Gallery_UIS_v01.png", "#f6c89f"),
    ("TAXO_No0002-CurlyGlasses-Gallery_UIS_v01.png", "#98b9a6"),
    ("TAXO_No0003-Chef-Gallery_UIS_v01.png", "#eedcb3"),
    ("TAXO_No0004-Headset-Gallery_UIS_v01.png", "#a3cbca"),
    ("TAXO_No0005-Elder-Gallery_UIS_v01.png", "#d5dfb8"),
    ("TAXO_No0006-WarmMustache-Gallery_UIS_v01.png", "#f4b988"),
    ("TAXO_No0007-Beanie-Gallery_UIS_v01.png", "#d5d5bb"),
    ("TAXO_No0008-Visor-Gallery_UIS_v01.png", "#b4c3c8"),
    ("TAXO_No0009-BlueCap-Gallery_UIS_v01.png", "#c2c7c5"),
    ("TAXO_No0010-Safari-Gallery_UIS_v01.png", "#e2d29e"),
    ("TAXO_No0013-ExplainingTheExplanation-Gallery_UIS_v01.png", "#edd6b6"),
]

for idx, (box, (fname, _)) in enumerate(zip(gallery_crops, gallery_meta)):
    tile = im.crop(box)
    tile.save(f'public/images/gallery/{fname}')

# 4. Footer stamp and rocket stamp
footer_stamp = im.crop((44, 884, 160, 978))
footer_stamp.save('public/icons/footer_stamp.png')

footer_rocket = im.crop((842, 884, 874, 932))
footer_rocket.save('public/icons/footer_rocket.png')

print("All assets extracted successfully.")
