window.onload = function() {

var drawingSkills = new CanvasJS.Chart("drawingSkills", {
	animationEnabled: true,
    backgroundColor: 'transparent',
	title: {
		text: "Techniques de dessin"
	},
	data: [{
		type: "pie",
		startAngle: 200,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 60, label: "Acquis", color: "rgb(76, 144, 255)"},
            {y: 40, label: "Non acquis", color: "white"}
		]
	}]
});
drawingSkills.render();
var infographySkills = new CanvasJS.Chart("infographySkills", {
	animationEnabled: true,
    backgroundColor: 'transparent',
	title: {
		text: "Techniques d'infographie"
	},
	data: [{
		type: "pie",
		startAngle: 150,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 20, label: "Acquis", color: "rgb(76, 144, 255)"},
            {y: 80, label: "Non acquis", color: "white"}
		]
	}]
});
infographySkills.render();
var printingSkills = new CanvasJS.Chart("printingSkills", {
	animationEnabled: true,
    backgroundColor: 'transparent',
	title: {
		text: "Procédés et contraintes d'impression"
	},
	data: [{
		type: "pie",
		startAngle: 200,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 75, label: "Acquis", color: "rgb(76, 144, 255)"},
            {y: 25, label: "Non acquis", color: "white"}
		]
	}]
});
printingSkills.render();
var colorimetrySkills = new CanvasJS.Chart("colorimetrySkills", {
	animationEnabled: true,
    backgroundColor: 'transparent',
	title: {
		text: "Colorimétrie"
	},
	data: [{
		type: "pie",
		startAngle: 200,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 80, label: "Acquis", color: "rgb(76, 144, 255)"},
            {y: 20, label: "Non acquis", color: "white"}
		]
	}]
});
colorimetrySkills.render();
var readingSkills = new CanvasJS.Chart("readingSkills", {
	animationEnabled: true,
    backgroundColor: 'transparent',
	title: {
		text: "Lire un cahier des charges"
	},
	data: [{
		type: "pie",
		startAngle: 270,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 50, label: "Acquis", color: "rgb(76, 144, 255)"},
            {y: 50, label: "Non acquis", color: "white"}
		]
	}]
});
readingSkills.render();
var softwareSkills = new CanvasJS.Chart("softwareSkills", {
	animationEnabled: true,
    backgroundColor: 'transparent',
	title: {
		text: "Logiciels (Photoshop / Illustrator)"
	},
	data: [{
		type: "pie",
		startAngle: 150,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 25, label: "Acquis", color: "rgb(76, 144, 255)"},
            {y: 75, label: "Non acquis", color: "white"}
		]
	}]
});
softwareSkills.render();
var conceptSkills = new CanvasJS.Chart("conceptSkills", {
	animationEnabled: true,
    backgroundColor: 'transparent',
	title: {
		text: "Imaginer un concept"
	},
	data: [{
		type: "pie",
		startAngle: 200,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 90, label: "Acquis", color: "rgb(76, 144, 255)"},
            {y: 10, label: "Non acquis", color: "white"}
		]
	}]
});
conceptSkills.render();
}
