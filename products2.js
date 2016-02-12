var prodArray = [];
prodArray[0] = ["Black Fun Shirt", "denim blue metallic button fastening summer white pure hue subtle distressed casual appeal. Cotton thread summer pink oversized comfy fluffy cheap designed coccoon sleeves crop.", "$10.99", "img/blkshirt.jpeg"];
prodArray[1] = ["Blue Fun Shirt", "Western-inspired suede jacket denim blue metallic button fastening summer white pure hue subtle distressed casual appeal.", "$11.99", "img/blueshirt.jpeg"];
prodArray[2] = ["Gray Fun Shirt", "Boot cut leg opening relaxed skinny slim straight from the waste down black denim. Western-inspired suede jacket denim blue metallic button fastening summer white pure", "$10.99", "img/grayshirt.jpeg"];
prodArray[3] = ["Green Fun Shirt", "easy dressing contrast cuffs to the arms and ankles. Pocket detail to sides jacquard fabric fully lined notch lapel three-button cuffs contrast stitching classic", "$11.99", "img/greenshirt.jpeg"];
prodArray[4] = ["Pink Fun Shirt", "Wardrobe stylish fitted long sleeves pleats texture fabric mini neckline cobalt blue. Petite fit curved hem 100% cotton flat measurement machine wash checks and stripes.", "$10.99", "img/pinkshirt.jpeg"];
prodArray[5] = ["Purple Fun Shirt", "Monochrome textures casual daily polo neck knitted floral effortless short sleeve. Monochrome textures casual daily polo neck knitted floral effortless short sleeve.", "$10.99", "img/purpleshirt.jpeg"];
prodArray[6] = ["Red Fun Shirt", "Crew neckline modal animal print regular fit lace embellishment seam detail pretty turquoise.", "$11.99", "img/redshirt.jpeg"];
prodArray[7] = ["Yellow Fun Shirt", "Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral.", "$12.99", "img/yellowshirt.jpeg"];

var prod1 = document.getElementById("shirts");

for (var i = 0; i < 8; i++) {
  prod1.innerHTML += "<article><h2>" + prodArray[i][0] + "</h2><section>" + 
        "<div class='image'><img src='"+ prodArray[i][3] + "' alt=''></div>" +
        "<span><p>" + prodArray[i][1] + "</p></span></section><section><span>" +
        "<p class='price'>Price: " + prodArray[i][2] + "</p></span></section></article>";
}