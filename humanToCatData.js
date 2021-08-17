const humanToCatData = {"1":{"years":0,"months":1},"2":{"years":0,"months":2},"3":{"years":0,"months":2},"4":{"years":0,"months":3},"5":{"years":0,"months":4},"6":{"years":0,"months":4},"7":{"years":0,"months":5},"8":{"years":0,"months":5},"9":{"years":0,"months":6},"10":{"years":0,"months":6},"11":{"years":0,"months":7},"12":{"years":0,"months":7},"13":{"years":0,"months":9},"14":{"years":0,"months":10},"15":{"years":1,"months":0},"16":{"years":1,"months":1},"17":{"years":1,"months":2},"18":{"years":1,"months":3},"19":{"years":1,"months":4},"20":{"years":1,"months":5},"21":{"years":1,"months":6},"22":{"years":1,"months":8},"23":{"years":1,"months":10},"24":{"years":2,"months":0},"25":{"years":2,"months":3},"26":{"years":2,"months":6},"27":{"years":2,"months":9},"28":{"years":3,"months":0},"29":{"years":3,"months":3},"30":{"years":3,"months":6},"31":{"years":3,"months":9},"32":{"years":4,"months":0},"33":{"years":4,"months":3},"34":{"years":4,"months":6},"35":{"years":4,"months":9},"36":{"years":5,"months":0},"37":{"years":5,"months":3},"38":{"years":5,"months":6},"39":{"years":5,"months":9},"40":{"years":6,"months":0},"41":{"years":6,"months":3},"42":{"years":6,"months":6},"43":{"years":6,"months":9},"44":{"years":7,"months":0},"45":{"years":7,"months":3},"46":{"years":7,"months":6},"47":{"years":7,"months":9},"48":{"years":8,"months":0},"49":{"years":8,"months":3},"50":{"years":8,"months":6},"51":{"years":8,"months":9},"52":{"years":9,"months":0},"53":{"years":9,"months":3},"54":{"years":9,"months":6},"55":{"years":9,"months":9},"56":{"years":10,"months":0},"57":{"years":10,"months":3},"58":{"years":10,"months":6},"59":{"years":10,"months":9},"60":{"years":11,"months":0},"61":{"years":11,"months":3},"62":{"years":11,"months":6},"63":{"years":11,"months":9},"64":{"years":12,"months":0},"65":{"years":12,"months":3},"66":{"years":12,"months":6},"67":{"years":12,"months":9},"68":{"years":13,"months":0},"69":{"years":13,"months":3},"70":{"years":13,"months":6},"71":{"years":13,"months":9},"72":{"years":14,"months":0},"73":{"years":14,"months":3},"74":{"years":14,"months":6},"75":{"years":14,"months":9},"76":{"years":15,"months":0},"77":{"years":15,"months":3},"78":{"years":15,"months":6},"79":{"years":15,"months":9},"80":{"years":16,"months":0},"81":{"years":16,"months":3},"82":{"years":16,"months":6},"83":{"years":16,"months":9},"84":{"years":17,"months":0},"85":{"years":17,"months":3},"86":{"years":17,"months":6},"87":{"years":17,"months":9},"88":{"years":18,"months":0},"89":{"years":18,"months":3},"90":{"years":18,"months":6},"91":{"years":18,"months":9},"92":{"years":19,"months":0},"93":{"years":19,"months":3},"94":{"years":19,"months":6},"95":{"years":19,"months":9},"96":{"years":20,"months":0},"97":{"years":20,"months":3},"98":{"years":20,"months":6},"99":{"years":20,"months":9},"100":{"years":21,"months":0},"101":{"years":21,"months":3},"102":{"years":21,"months":6},"103":{"years":21,"months":9},"104":{"years":22,"months":0},"105":{"years":22,"months":3},"106":{"years":22,"months":6},"107":{"years":22,"months":9},"108":{"years":23,"months":0},"109":{"years":23,"months":3},"110":{"years":23,"months":6},"111":{"years":23,"months":9},"112":{"years":24,"months":0},"113":{"years":24,"months":3},"114":{"years":24,"months":6},"115":{"years":24,"months":9},"116":{"years":25,"months":0}};

const humanToCatDataFormatted = {"1":"1 month","2":"2 months","3":"2 months","4":"3 months","5":"4 months","6":"4 months","7":"5 months","8":"5 months","9":"6 months","10":"6 months","11":"7 months","12":"7 months","13":"9 months","14":"10 months","15":"1 year","16":"1 year and 1 month","17":"1 year and 2 months","18":"1 year and 3 months","19":"1 year and 4 months","20":"1 year and 5 months","21":"1 year and 6 months","22":"1 year and 8 months","23":"1 year and 10 months","24":"2 years","25":"2 years and 3 months","26":"2 years and 6 months","27":"2 years and 9 months","28":"3 years","29":"3 years and 3 months","30":"3 years and 6 months","31":"3 years and 9 months","32":"4 years","33":"4 years and 3 months","34":"4 years and 6 months","35":"4 years and 9 months","36":"5 years","37":"5 years and 3 months","38":"5 years and 6 months","39":"5 years and 9 months","40":"6 years","41":"6 years and 3 months","42":"6 years and 6 months","43":"6 years and 9 months","44":"7 years","45":"7 years and 3 months","46":"7 years and 6 months","47":"7 years and 9 months","48":"8 years","49":"8 years and 3 months","50":"8 years and 6 months","51":"8 years and 9 months","52":"9 years","53":"9 years and 3 months","54":"9 years and 6 months","55":"9 years and 9 months","56":"10 years","57":"10 years and 3 months","58":"10 years and 6 months","59":"10 years and 9 months","60":"11 years","61":"11 years and 3 months","62":"11 years and 6 months","63":"11 years and 9 months","64":"12 years","65":"12 years and 3 months","66":"12 years and 6 months","67":"12 years and 9 months","68":"13 years","69":"13 years and 3 months","70":"13 years and 6 months","71":"13 years and 9 months","72":"14 years","73":"14 years and 3 months","74":"14 years and 6 months","75":"14 years and 9 months","76":"15 years","77":"15 years and 3 months","78":"15 years and 6 months","79":"15 years and 9 months","80":"16 years","81":"16 years and 3 months","82":"16 years and 6 months","83":"16 years and 9 months","84":"17 years","85":"17 years and 3 months","86":"17 years and 6 months","87":"17 years and 9 months","88":"18 years","89":"18 years and 3 months","90":"18 years and 6 months","91":"18 years and 9 months","92":"19 years","93":"19 years and 3 months","94":"19 years and 6 months","95":"19 years and 9 months","96":"20 years","97":"20 years and 3 months","98":"20 years and 6 months","99":"20 years and 9 months","100":"21 years","101":"21 years and 3 months","102":"21 years and 6 months","103":"21 years and 9 months","104":"22 years","105":"22 years and 3 months","106":"22 years and 6 months","107":"22 years and 9 months","108":"23 years","109":"23 years and 3 months","110":"23 years and 6 months","111":"23 years and 9 months","112":"24 years","113":"24 years and 3 months","114":"24 years and 6 months","115":"24 years and 9 months","116":"25 years"};

const catToHumanData = {"1":{"years":1},"2":{"years":3},"3":{"years":4},"4":{"years":6},"5":{"years":8},"6":{"years":10},"7":{"years":12},"8":{"years":13},"9":{"years":13},"10":{"years":14},"11":{"years":14},"12":{"years":15},"13":{"years":16},"14":{"years":17},"15":{"years":18},"16":{"years":19},"17":{"years":20},"18":{"years":21},"19":{"years":22},"20":{"years":22},"21":{"years":23},"22":{"years":23},"23":{"years":24},"24":{"years":24},"25":{"years":24},"26":{"years":25},"27":{"years":25},"28":{"years":25},"29":{"years":26},"30":{"years":26},"31":{"years":26},"32":{"years":27},"33":{"years":27},"34":{"years":27},"35":{"years":28},"36":{"years":28},"37":{"years":28},"38":{"years":28},"39":{"years":29},"40":{"years":29},"41":{"years":29},"42":{"years":30},"43":{"years":30},"44":{"years":30},"45":{"years":31},"46":{"years":31},"47":{"years":31},"48":{"years":32},"49":{"years":32},"50":{"years":32},"51":{"years":33},"52":{"years":33},"53":{"years":33},"54":{"years":34},"55":{"years":34},"56":{"years":34},"57":{"years":35},"58":{"years":35},"59":{"years":35},"60":{"years":36},"61":{"years":36},"62":{"years":36},"63":{"years":37},"64":{"years":37},"65":{"years":37},"66":{"years":38},"67":{"years":38},"68":{"years":38},"69":{"years":39},"70":{"years":39},"71":{"years":39},"72":{"years":40},"73":{"years":40},"74":{"years":40},"75":{"years":41},"76":{"years":41},"77":{"years":41},"78":{"years":42},"79":{"years":42},"80":{"years":42},"81":{"years":43},"82":{"years":43},"83":{"years":43},"84":{"years":44},"85":{"years":44},"86":{"years":44},"87":{"years":45},"88":{"years":45},"89":{"years":45},"90":{"years":46},"91":{"years":46},"92":{"years":46},"93":{"years":47},"94":{"years":47},"95":{"years":47},"96":{"years":48},"97":{"years":48},"98":{"years":48},"99":{"years":49},"100":{"years":49},"101":{"years":49},"102":{"years":50},"103":{"years":50},"104":{"years":50},"105":{"years":51},"106":{"years":51},"107":{"years":51},"108":{"years":52},"109":{"years":52},"110":{"years":52},"111":{"years":53},"112":{"years":53},"113":{"years":53},"114":{"years":54},"115":{"years":54},"116":{"years":54},"117":{"years":55},"118":{"years":55},"119":{"years":55},"120":{"years":56},"121":{"years":56},"122":{"years":56},"123":{"years":57},"124":{"years":57},"125":{"years":57},"126":{"years":58},"127":{"years":58},"128":{"years":58},"129":{"years":59},"130":{"years":59},"131":{"years":59},"132":{"years":60},"133":{"years":60},"134":{"years":60},"135":{"years":61},"136":{"years":61},"137":{"years":61},"138":{"years":62},"139":{"years":62},"140":{"years":62},"141":{"years":63},"142":{"years":63},"143":{"years":63},"144":{"years":64},"145":{"years":64},"146":{"years":64},"147":{"years":65},"148":{"years":65},"149":{"years":65},"150":{"years":66},"151":{"years":66},"152":{"years":66},"153":{"years":67},"154":{"years":67},"155":{"years":67},"156":{"years":68},"157":{"years":68},"158":{"years":68},"159":{"years":69},"160":{"years":69},"161":{"years":69},"162":{"years":70},"163":{"years":70},"164":{"years":70},"165":{"years":71},"166":{"years":71},"167":{"years":71},"168":{"years":72},"169":{"years":72},"170":{"years":72},"171":{"years":73},"172":{"years":73},"173":{"years":73},"174":{"years":74},"175":{"years":74},"176":{"years":74},"177":{"years":75},"178":{"years":75},"179":{"years":75},"180":{"years":76},"181":{"years":76},"182":{"years":76},"183":{"years":77},"184":{"years":77},"185":{"years":77},"186":{"years":78},"187":{"years":78},"188":{"years":78},"189":{"years":79},"190":{"years":79},"191":{"years":79},"192":{"years":80},"193":{"years":80},"194":{"years":80},"195":{"years":81},"196":{"years":81},"197":{"years":81},"198":{"years":82},"199":{"years":82},"200":{"years":82},"201":{"years":83},"202":{"years":83},"203":{"years":83},"204":{"years":84},"205":{"years":84},"206":{"years":84},"207":{"years":85},"208":{"years":85},"209":{"years":85},"210":{"years":86},"211":{"years":86},"212":{"years":86},"213":{"years":87},"214":{"years":87},"215":{"years":87},"216":{"years":88},"217":{"years":88},"218":{"years":88},"219":{"years":89},"220":{"years":89},"221":{"years":89},"222":{"years":90},"223":{"years":90},"224":{"years":90},"225":{"years":91},"226":{"years":91},"227":{"years":91},"228":{"years":92},"229":{"years":92},"230":{"years":92},"231":{"years":93},"232":{"years":93},"233":{"years":93},"234":{"years":94},"235":{"years":94},"236":{"years":94},"237":{"years":95},"238":{"years":95},"239":{"years":95},"240":{"years":96},"241":{"years":96},"242":{"years":96},"243":{"years":97},"244":{"years":97},"245":{"years":97},"246":{"years":98},"247":{"years":98},"248":{"years":98},"249":{"years":99},"250":{"years":99},"251":{"years":99},"252":{"years":100},"253":{"years":100},"254":{"years":100},"255":{"years":101},"256":{"years":101},"257":{"years":101},"258":{"years":102},"259":{"years":102},"260":{"years":102},"261":{"years":103},"262":{"years":103},"263":{"years":103},"264":{"years":104},"265":{"years":104},"266":{"years":104},"267":{"years":105},"268":{"years":105},"269":{"years":105},"270":{"years":106},"271":{"years":106},"272":{"years":106},"273":{"years":107},"274":{"years":107},"275":{"years":107},"276":{"years":108},"277":{"years":108},"278":{"years":108},"279":{"years":109},"280":{"years":109},"281":{"years":109},"282":{"years":110},"283":{"years":110},"284":{"years":110},"285":{"years":111},"286":{"years":111},"287":{"years":111},"288":{"years":112},"289":{"years":112},"290":{"years":112},"291":{"years":113},"292":{"years":113},"293":{"years":113},"294":{"years":114},"295":{"years":114},"296":{"years":114},"297":{"years":115},"298":{"years":115},"299":{"years":115},"300":{"years":116}};
const catToHumanDataFormatted = {"1":"1 year","2":"3 years","3":"4 years","4":"6 years","5":"8 years","6":"10 years","7":"12 years","8":"13 years","9":"13 years","10":"14 years","11":"14 years","12":"15 years","13":"16 years","14":"17 years","15":"18 years","16":"19 years","17":"20 years","18":"21 years","19":"22 years","20":"22 years","21":"23 years","22":"23 years","23":"24 years","24":"24 years","25":"24 years","26":"25 years","27":"25 years","28":"25 years","29":"26 years","30":"26 years","31":"26 years","32":"27 years","33":"27 years","34":"27 years","35":"28 years","36":"28 years","37":"28 years","38":"28 years","39":"29 years","40":"29 years","41":"29 years","42":"30 years","43":"30 years","44":"30 years","45":"31 years","46":"31 years","47":"31 years","48":"32 years","49":"32 years","50":"32 years","51":"33 years","52":"33 years","53":"33 years","54":"34 years","55":"34 years","56":"34 years","57":"35 years","58":"35 years","59":"35 years","60":"36 years","61":"36 years","62":"36 years","63":"37 years","64":"37 years","65":"37 years","66":"38 years","67":"38 years","68":"38 years","69":"39 years","70":"39 years","71":"39 years","72":"40 years","73":"40 years","74":"40 years","75":"41 years","76":"41 years","77":"41 years","78":"42 years","79":"42 years","80":"42 years","81":"43 years","82":"43 years","83":"43 years","84":"44 years","85":"44 years","86":"44 years","87":"45 years","88":"45 years","89":"45 years","90":"46 years","91":"46 years","92":"46 years","93":"47 years","94":"47 years","95":"47 years","96":"48 years","97":"48 years","98":"48 years","99":"49 years","100":"49 years","101":"49 years","102":"50 years","103":"50 years","104":"50 years","105":"51 years","106":"51 years","107":"51 years","108":"52 years","109":"52 years","110":"52 years","111":"53 years","112":"53 years","113":"53 years","114":"54 years","115":"54 years","116":"54 years","117":"55 years","118":"55 years","119":"55 years","120":"56 years","121":"56 years","122":"56 years","123":"57 years","124":"57 years","125":"57 years","126":"58 years","127":"58 years","128":"58 years","129":"59 years","130":"59 years","131":"59 years","132":"60 years","133":"60 years","134":"60 years","135":"61 years","136":"61 years","137":"61 years","138":"62 years","139":"62 years","140":"62 years","141":"63 years","142":"63 years","143":"63 years","144":"64 years","145":"64 years","146":"64 years","147":"65 years","148":"65 years","149":"65 years","150":"66 years","151":"66 years","152":"66 years","153":"67 years","154":"67 years","155":"67 years","156":"68 years","157":"68 years","158":"68 years","159":"69 years","160":"69 years","161":"69 years","162":"70 years","163":"70 years","164":"70 years","165":"71 years","166":"71 years","167":"71 years","168":"72 years","169":"72 years","170":"72 years","171":"73 years","172":"73 years","173":"73 years","174":"74 years","175":"74 years","176":"74 years","177":"75 years","178":"75 years","179":"75 years","180":"76 years","181":"76 years","182":"76 years","183":"77 years","184":"77 years","185":"77 years","186":"78 years","187":"78 years","188":"78 years","189":"79 years","190":"79 years","191":"79 years","192":"80 years","193":"80 years","194":"80 years","195":"81 years","196":"81 years","197":"81 years","198":"82 years","199":"82 years","200":"82 years","201":"83 years","202":"83 years","203":"83 years","204":"84 years","205":"84 years","206":"84 years","207":"85 years","208":"85 years","209":"85 years","210":"86 years","211":"86 years","212":"86 years","213":"87 years","214":"87 years","215":"87 years","216":"88 years","217":"88 years","218":"88 years","219":"89 years","220":"89 years","221":"89 years","222":"90 years","223":"90 years","224":"90 years","225":"91 years","226":"91 years","227":"91 years","228":"92 years","229":"92 years","230":"92 years","231":"93 years","232":"93 years","233":"93 years","234":"94 years","235":"94 years","236":"94 years","237":"95 years","238":"95 years","239":"95 years","240":"96 years","241":"96 years","242":"96 years","243":"97 years","244":"97 years","245":"97 years","246":"98 years","247":"98 years","248":"98 years","249":"99 years","250":"99 years","251":"99 years","252":"100 years","253":"100 years","254":"100 years","255":"101 years","256":"101 years","257":"101 years","258":"102 years","259":"102 years","260":"102 years","261":"103 years","262":"103 years","263":"103 years","264":"104 years","265":"104 years","266":"104 years","267":"105 years","268":"105 years","269":"105 years","270":"106 years","271":"106 years","272":"106 years","273":"107 years","274":"107 years","275":"107 years","276":"108 years","277":"108 years","278":"108 years","279":"109 years","280":"109 years","281":"109 years","282":"110 years","283":"110 years","284":"110 years","285":"111 years","286":"111 years","287":"111 years","288":"112 years","289":"112 years","290":"112 years","291":"113 years","292":"113 years","293":"113 years","294":"114 years","295":"114 years","296":"114 years","297":"115 years","298":"115 years","299":"115 years","300":"116 years"};

module.exports = { humanToCatData, humanToCatDataFormatted, catToHumanData, catToHumanDataFormatted };
