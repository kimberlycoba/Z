var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Departamento_1 = new ol.format.GeoJSON();
var features_Departamento_1 = format_Departamento_1.readFeatures(json_Departamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamento_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_1.addFeatures(features_Departamento_1);
var lyr_Departamento_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamento_1, 
                style: style_Departamento_1,
                popuplayertitle: 'Departamento',
                interactive: true,
    title: 'Departamento<br />\
    <img src="styles/legend/Departamento_1_0.png" /> AMAZONAS<br />\
    <img src="styles/legend/Departamento_1_1.png" /> ANCASH<br />\
    <img src="styles/legend/Departamento_1_2.png" /> APURIMAC<br />\
    <img src="styles/legend/Departamento_1_3.png" /> AREQUIPA<br />\
    <img src="styles/legend/Departamento_1_4.png" /> AYACUCHO<br />\
    <img src="styles/legend/Departamento_1_5.png" /> CAJAMARCA<br />\
    <img src="styles/legend/Departamento_1_6.png" /> CALLAO<br />\
    <img src="styles/legend/Departamento_1_7.png" /> CUSCO<br />\
    <img src="styles/legend/Departamento_1_8.png" /> HUANCAVELICA<br />\
    <img src="styles/legend/Departamento_1_9.png" /> HUANUCO<br />\
    <img src="styles/legend/Departamento_1_10.png" /> ICA<br />\
    <img src="styles/legend/Departamento_1_11.png" /> JUNIN<br />\
    <img src="styles/legend/Departamento_1_12.png" /> LA LIBERTAD<br />\
    <img src="styles/legend/Departamento_1_13.png" /> LAMBAYEQUE<br />\
    <img src="styles/legend/Departamento_1_14.png" /> LIMA<br />\
    <img src="styles/legend/Departamento_1_15.png" /> LORETO<br />\
    <img src="styles/legend/Departamento_1_16.png" /> MADRE DE DIOS<br />\
    <img src="styles/legend/Departamento_1_17.png" /> MOQUEGUA<br />\
    <img src="styles/legend/Departamento_1_18.png" /> PASCO<br />\
    <img src="styles/legend/Departamento_1_19.png" /> PIURA<br />\
    <img src="styles/legend/Departamento_1_20.png" /> PUNO<br />\
    <img src="styles/legend/Departamento_1_21.png" /> SAN MARTIN<br />\
    <img src="styles/legend/Departamento_1_22.png" /> TACNA<br />\
    <img src="styles/legend/Departamento_1_23.png" /> TUMBES<br />\
    <img src="styles/legend/Departamento_1_24.png" /> UCAYALI<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Departamento_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Departamento_1];
lyr_Departamento_1.set('fieldAliases', {'ccdd': 'ccdd', 'nombdep': 'nombdep', 'fuente': 'fuente', 'tematica': 'tematica', 'id_geografia': 'id_geografia', });
lyr_Departamento_1.set('fieldImages', {'ccdd': 'Hidden', 'nombdep': 'TextEdit', 'fuente': 'Hidden', 'tematica': 'Hidden', 'id_geografia': 'Hidden', });
lyr_Departamento_1.set('fieldLabels', {'nombdep': 'no label', });
lyr_Departamento_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});