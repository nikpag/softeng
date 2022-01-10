const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const response = require("../../utilities/FormattedResponse.js");
const { conString } = require("../../utilities/definitions.js");

function resetvehicles(req, res) {
  
  const con = mysql.createConnection(conString);

  const format = req.query.format;

  const delete_query = "DELETE FROM Vehicle";
  const insert_query = "INSERT INTO `Vehicle` VALUES ('AT19HLV57173',2004,'OO14E0167','olympia_odos'),('AY38OQF67603',2020,'OO01A7197','olympia_odos'),('BI87HYL81972',2020,'MR98F8272','moreas'),('BK77KNV91142',2007,'OO67L7721','olympia_odos'),('BM25PHF40639',2018,'AO19M3646','aodos'),('BY85QGR11636',2018,'GF64H7689','gefyra'),('BZ76ROL87339',2017,'AO94O1451','aodos'),('CK97FAU13897',2007,'GF85Z5553','gefyra'),('CM15YCB60994',2005,'EG87N4472','egnatia'),('CP56DAO45598',2017,'GF96B8067','gefyra'),('CR31GMR97972',2000,'EG56V3913','egnatia'),('DO24BCW15511',2009,'KO87M8492','kentriki_odos'),('DP11ENT03275',2008,'AO11L5271','aodos'),('DV04FQL29609',2010,'AO87S8322','aodos'),('DW44ZOO26361',2009,'EG74B6896','egnatia'),('EC02LZC49528',2001,'EG23G6966','egnatia'),('ED51EWW52190',2017,'KO38E3788','kentriki_odos'),('EE22TMX10817',2001,'OO29X6651','olympia_odos'),('EG95RTB75032',2013,'NE91T5473','nea_odos'),('EM54HQI58682',2008,'OO58I4183','olympia_odos'),('EN26OAB52983',2002,'GF51E2190','gefyra'),('EV77EDV52985',2001,'NE31Q7933','nea_odos'),('EZ65FLV39493',2012,'MR55V8401','moreas'),('FL13UMN92207',2006,'KO37T8485','kentriki_odos'),('FY47TUN40300',2002,'NE43B7275','nea_odos'),('HA82SCK64299',2001,'MR30M7731','moreas'),('HE38BQH01623',2016,'MR72G8045','moreas'),('HR53SRO94328',2004,'MR93N1400','moreas'),('HT62RDI04611',2000,'AO69I5108','aodos'),('HW75BKT77773',2016,'KO82C5500','kentriki_odos'),('IA29IQS63679',2010,'NE83K9493','nea_odos'),('IC95TLY24827',2020,'OO65G9691','olympia_odos'),('IN99SEN20660',2014,'EG47U1656','egnatia'),('IO09FGE68100',2015,'GF87C4626','gefyra'),('IW53OQE31439',2014,'EG05B7264','egnatia'),('IX01MVL33676',2001,'KO57Z7727','kentriki_odos'),('IZ65WAT29135',2002,'MR39O1247','moreas'),('JD78PQD35395',2002,'EG13U6715','egnatia'),('JE65QJK64802',2002,'GF48M7092','gefyra'),('JF94VYA88954',2000,'OO49W8536','olympia_odos'),('JO50FSF60755',2011,'KO95P1306','kentriki_odos'),('JV67MTI17124',2000,'NE61X5911','nea_odos'),('KB55KTM48860',2009,'KO72G8546','kentriki_odos'),('KF48RSD79865',2012,'MR56E8319','moreas'),('KW50MJG67260',2016,'GF84U4130','gefyra'),('LC72NRN52084',2001,'OO85U6024','olympia_odos'),('LG64ARC91224',2019,'AO27P4628','aodos'),('LM86GYO69819',2010,'GF61W4412','gefyra'),('MA30QLI76818',2019,'GF94Q2036','gefyra'),('MP14WFM40909',2008,'GF62J1185','gefyra'),('MQ65WJJ60020',2009,'KO53F1683','kentriki_odos'),('MU06LHX94338',2016,'EG87C3789','egnatia'),('MX39VOS38645',2018,'AO12K0807','aodos'),('NO82BAX82566',2000,'NE74M6592','nea_odos'),('NY14GZR94632',2011,'NE66B0405','nea_odos'),('NZ35XLQ89678',2015,'NE71H2256','nea_odos'),('OC94ASJ72024',2002,'AO19H6549','aodos'),('OY94SZK34436',2007,'NE97X0282','nea_odos'),('PD45WOT56494',2010,'NE55G3669','nea_odos'),('PE73VJU23485',2010,'AO18S3731','aodos'),('PF04UCA93312',2007,'GF84T8932','gefyra'),('PM58XHX45588',2006,'NE66N5124','nea_odos'),('QH15HWX24570',2009,'MR36J6829','moreas'),('QN12NTR81378',2003,'GF26N8608','gefyra'),('QN23UHH39091',2014,'MR58R4385','moreas'),('QO68DIC93032',2016,'MR26E3126','moreas'),('QO77TFN61853',2004,'KO80I5938','kentriki_odos'),('QP02SYE47964',2010,'NE74M0871','nea_odos'),('QR03XCJ37459',2014,'OO43C8099','olympia_odos'),('QU94IGC75528',2003,'EG52J0268','egnatia'),('QW79CHL42244',2006,'KO64Z6868','kentriki_odos'),('QX75YWC61835',2019,'OO20E8329','olympia_odos'),('RK48BOP88344',2016,'OO41Q9202','olympia_odos'),('RR73DWB65452',2017,'AO13W1028','aodos'),('RR98KQE80731',2020,'MR06V9056','moreas'),('RV87TIY76692',2001,'KO69R5975','kentriki_odos'),('SL09NOT64494',2005,'GF17K5976','gefyra'),('SU00RDZ36214',2014,'AO31K4646','aodos'),('SY96JDQ97089',2004,'AO88V0724','aodos'),('TE24LCO18661',2009,'EG36L0177','egnatia'),('TV81MAQ99005',2000,'EG00X1873','egnatia'),('TZ48CCW54765',2015,'EG79G1284','egnatia'),('UA13YTK28483',2020,'MR57I0349','moreas'),('UF84JOS00561',2020,'GF26E1328','gefyra'),('UO75YNW62238',2003,'KO75W9528','kentriki_odos'),('UP28MBM38391',2010,'NE09V3603','nea_odos'),('VJ92OYV94295',2000,'OO59B1482','olympia_odos'),('VL67TFO75321',2007,'EG76E0993','egnatia'),('VX68BAR38623',2005,'NE80E5551','nea_odos'),('WG11QVY31890',2006,'OO68H9901','olympia_odos'),('WU78BMX13511',2008,'GF52G9102','gefyra'),('WY00MLL63827',2000,'KO44J2006','kentriki_odos'),('XE59BZM26378',2020,'EG47I2811','egnatia'),('XF28DGK65250',2021,'GF52T0389','gefyra'),('XV40HUQ04740',2001,'OO26V4144','olympia_odos'),('XV91YMP27722',2012,'MR63V2295','moreas'),('YH66OKD41942',2019,'KO58G5356','kentriki_odos'),('YL27IFD65117',2006,'AO49I8807','aodos'),('YX66XYW62640',2014,'GF85R2347','gefyra'),('ZY93PCY41868',2006,'KO91P5387','kentriki_odos')";
  con.query(delete_query, (err, result) => {
    if (err) {
      const data = { "status": "failed", "message": err };
      response(res, 500, data, format);
    }

    else {

      con.query(insert_query, (err, result) => {
        if (err) {
          const data = { "status": "failed", "message": err };
          response(res, 500, data, format);
        }
        else {
          const data = { "status": "OK" };
          response(res, 200, data, format);
        }
      })
    }
  })
}

router.post("/admin/resetvehicles", resetvehicles);

module.exports = router;
