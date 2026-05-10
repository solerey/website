#!/bin/bash
# Run from project root: bash scripts/download-images.sh
set -e
echo "📸 Downloading gallery images..."
mkdir -p public/images/gallery public/images/histoire public/images/activites

curl -sL "https://static.wixstatic.com/media/75c90c_79979925c18a44598fa984025c3b8dad~mv2.jpg" -o public/images/gallery/photo-1.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_7bee6ee2f67a413aaf48b666554c2829~mv2.jpg" -o public/images/gallery/photo-2.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_3e015248a2074a32af7aa18a022574f4~mv2.jpg" -o public/images/gallery/photo-3.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_c3fab03b574841d882d9afdc34a33357~mv2.jpg" -o public/images/gallery/photo-4.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_c30114ff4e0d406f9eff045932b0e99a~mv2.jpg" -o public/images/gallery/photo-5.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_721c1fbbd7dc428cba9d0c42e15a8248~mv2.jpg" -o public/images/gallery/photo-6.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_b82c3313097d4aeca8c4949b95814b88~mv2.jpg" -o public/images/gallery/photo-7.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_3f2541974d664b8fb8d4a939e4fa5b55~mv2.jpg" -o public/images/gallery/photo-8.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_db682a948d8340138b7b64efe294eb89~mv2.jpg" -o public/images/gallery/photo-9.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_402a5c040fdc432bb62ff63b79681af1~mv2.jpg" -o public/images/gallery/photo-10.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_fd12c7098a524a2294cd415a7dcba0fa~mv2.jpg" -o public/images/gallery/photo-11.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_83efd8066d2b4f86a2d66430dd95d5d2~mv2.jpg" -o public/images/gallery/photo-12.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_aad4fa384aa3425bb9447cdb5e5e3f91~mv2.jpg" -o public/images/gallery/photo-13.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_d150cd0bc0f04ee893ec7c6865ad2217~mv2.jpg" -o public/images/gallery/photo-14.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_156cca1ef042428597dcd5e387738a24~mv2.jpg" -o public/images/gallery/photo-15.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_ed3a6970f3bb4617a52e831d5b4319b4~mv2.jpg" -o public/images/gallery/photo-16.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_0a7bfd238a364ffdbeb797e373236a9e~mv2.jpg" -o public/images/gallery/photo-17.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_d8f4ec95a9b84d5089c78ae6b4880274~mv2.jpg" -o public/images/gallery/photo-18.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_926b47444e014e7c8a536e7ad36f3293~mv2.jpg" -o public/images/gallery/photo-19.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_0dd57d86cf584f299666b994bb7ed85e~mv2.jpg" -o public/images/gallery/photo-20.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_e73aa6730a0b40198bd7dee8750eb1b1~mv2.jpg" -o public/images/gallery/photo-21.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_7d3004dce3d84a148224d4e056700ac8~mv2.jpg" -o public/images/gallery/photo-22.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_df51808a3dd04a7993a2664a5d1f60c5~mv2.jpg" -o public/images/gallery/photo-23.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_dc85071972304c41afd90589deb639c3~mv2.jpg" -o public/images/gallery/photo-24.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_e23a1f3fb9de4f43a33106eb867164ca~mv2.jpg" -o public/images/gallery/photo-25.jpg
echo "  ✓ 25 gallery photos"

echo "🏔️ Downloading histoire images..."
curl -sL "https://static.wixstatic.com/media/75c90c_e7855ca5e8ce4b548950f37cba83bde7~mv2.jpg" -o public/images/histoire/vue-mont-blanc.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_3e52f582802e476592bd6227b8645cab~mv2.png" -o public/images/histoire/hotel-beau-sejour.png
curl -sL "https://static.wixstatic.com/media/75c90c_3e33284447ce466a8848f74d798c2cda~mv2.png" -o public/images/histoire/anciens-proprietaires.png
curl -sL "https://static.wixstatic.com/media/75c90c_ed3e6c46d36645ba9e73337285679f63~mv2.png" -o public/images/histoire/lavancher-ancien-1.png
curl -sL "https://static.wixstatic.com/media/75c90c_d5ee5ec4a7f140e7a12ef6ee6af4e281~mv2.png" -o public/images/histoire/lavancher-ancien-2.png
echo "  ✓ 5 histoire photos"

echo "🥾 Downloading activites images..."
curl -sL "https://static.wixstatic.com/media/75c90c_598a77f917f64cf5a60696935352481e~mv2.png" -o public/images/activites/chapeau.png
curl -sL "https://static.wixstatic.com/media/75c90c_6a98c34e3f1f4095a591ac11b412e56f~mv2.jpg" -o public/images/activites/chalets-philippe.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_56dab87313764d4395ab5b15b233da2a~mv2.jpg" -o public/images/activites/four-a-pain.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_8f0221832561429c8da3f9fb43d7f188~mv2.jpg" -o public/images/activites/paradis-praz.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_c55fb72d279845e386bfec52d1bb6c10~mv2.jpg" -o public/images/activites/gorges-arveyron.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_a0cac7bf7e6b4f46b409d81df8f6800a~mv2.jpg" -o public/images/activites/escalade-arveyron.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_07d07f693df8467dbc54bdbc8ffb9ccb~mv2.jpg" -o public/images/activites/buet.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_6aa2ed6e8d6f4001a2ff83275ca6715b~mv2.jpg" -o public/images/activites/refuge-albert.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_eed8823ee00f42f5b5b386afed29cb9b~mv2.jpeg" -o public/images/activites/lac-blanc.jpeg
curl -sL "https://static.wixstatic.com/media/75c90c_f1963f19fcfa42f9bd9b268172c61c42~mv2.jpg" -o public/images/activites/emosson.jpg
curl -sL "https://static.wixstatic.com/media/75c90c_61d3009de536422cac0334803fa6a4b6~mv2.jpeg" -o public/images/activites/nid-aigle.jpeg
echo "  ✓ 11 activites photos"

echo "🖼️ Downloading logo..."
curl -sL "https://static.wixstatic.com/media/75c90c_202129c48070450a95c25026ddb4b0a2~mv2.png" -o public/images/logo.png
echo "  ✓ logo"

echo ""
echo "✅ All 42 images downloaded! Run 'npm run build' to rebuild."
