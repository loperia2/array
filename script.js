function liste()
{
	return
	[
		['ahmet','maranki','ahmet@mara.niki',0],
		['yesim','bobreksever','asda@mara.niki',1],
		['serhat','bobrekcı','dgsdfg@mara.niki',0],
		['emel','bobregıguzel','erterte@mara.niki',1],
		['guzide','bobregım','dfvdfvd@mara.niki',1],
		['ferhat','bobreklı','zxczxcz@mara.niki',0],
		['mecnun','bobrekal','vcbcvc@mara.niki',0],
		['leyla','bobrekaskı','asdas@mara.niki',1],
		['abdullah','bobregıyıgıt','sdfsdfs@mara.niki',0],
		['guzin','bobreksız','bnmbnmb@mara.niki',1],
		['selim','ıkıbobreklı','etyeyeru@mara.niki',0]
	];
}



function cinsiyet(x){
	if(x==true){
		return'hanım';
	}
	else{
		return'bey';
	}

}
function sablon(dizi){
	var metin= "sayin "+dizi[0]+''+cinsiyet(dizi[3]);
	var govde='Bobreginizi almaya geliyoruz hazır olun';
	metin+=gövde;
	metin+='isim '+dizi[0]+''+dizi[1];
	return metin;
}
$(document).ready(function() {
	$('#buton').click(
		function() {
			var liste=liste();
			for(var i=0;i<liste.length;i++){
				var metin=sablon(liste[i]);
				$('#label').append(metin);

			}

		}
	)
	}


)