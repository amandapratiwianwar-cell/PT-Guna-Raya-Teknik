/* Tambah proyek di sini. kategori: "Pemerintah", "Swasta", atau "Hunian". foto: data URI atau alamat gambar yang diizinkan. */
var PROJECTS=[
  {
    "judul": "AC cassette dan jalur pipa di plafon",
    "tipe": "Hasil pemasangan",
    "foto": "assets/portfolio/01-foto.jpg"
  },
  {
    "judul": "AC cassette terpasang di plafon kayu",
    "tipe": "Hasil pemasangan",
    "foto": "assets/portfolio/02-foto.jpg"
  },
  {
    "judul": "The Lima Residence – Kantor Ekspedisi",
    "tipe": "Video",
    "video": "assets/portfolio/03-video.mp4",
    "poster": "assets/portfolio/03-poster.jpg",
    "lokasi": "Dg. Naba, Jl. Yompo Lr. 1 No. 5, Gowa",
    "ket": "Video dokumentasi proyek."
  },
  {
    "judul": "Pemasangan AC cassette di plafon",
    "tipe": "Proses pengerjaan",
    "foto": "assets/portfolio/04-foto.jpg"
  },
  {
    "judul": "Teknisi memasang AC di dinding ruangan",
    "tipe": "Proses pengerjaan",
    "foto": "assets/portfolio/05-foto.jpg"
  },
  {
    "judul": "Deretan unit AC split di lorong",
    "tipe": "Hasil pemasangan",
    "foto": "assets/portfolio/06-foto.jpg"
  },
  {
    "judul": "Unit outdoor AC terpasang di dinding",
    "tipe": "Hasil pemasangan",
    "foto": "assets/portfolio/07-foto.jpg"
  },
  {
    "judul": "Pemasangan AC di dinding tinggi",
    "tipe": "Proses pengerjaan",
    "foto": "assets/portfolio/08-foto.jpg"
  },
  {
    "judul": "Teknisi memasang unit AC",
    "tipe": "Video",
    "video": "assets/portfolio/09-video.mp4",
    "poster": "assets/portfolio/09-poster.jpg"
  },
  {
    "judul": "Unit AC baru dalam kemasan di lokasi",
    "tipe": "Video",
    "video": "assets/portfolio/10-video.mp4",
    "poster": "assets/portfolio/10-poster.jpg"
  },
  {
    "judul": "Bangunan dua lantai dalam tahap pembangunan",
    "tipe": "Lokasi proyek",
    "foto": "assets/portfolio/11-foto.jpg"
  },
  {
    "judul": "Bangunan dua lantai di lokasi proyek",
    "tipe": "Lokasi proyek",
    "foto": "assets/portfolio/12-foto.jpg"
  },
  {
    "judul": "Area masuk bangunan saat pekerjaan berlangsung",
    "tipe": "Lokasi proyek",
    "foto": "assets/portfolio/13-foto.jpg"
  },
  {
    "judul": "Kondisi lokasi proyek",
    "tipe": "Video",
    "video": "assets/portfolio/14-video.mp4",
    "poster": "assets/portfolio/14-poster.jpg"
  }
];
var BRANDS=["Daikin","Panasonic","Sharp","LG","Samsung","Gree"];
function $(i){return document.getElementById(i)}
function pick(kebutuhan,merek){
  if(kebutuhan)$("kebutuhan").value=kebutuhan;
  if(merek)$("merek").value=merek;
  if(typeof updCnt==="function")updCnt();
  if($("top").hidden)location.hash="#pesan";else $("kontak").scrollIntoView({behavior:"smooth"});
}

/* Portofolio interaktif */
var DEMO=[
 {judul:"Instalasi AC kantor instansi",tipe:"Pemerintah",jenis:"Instalasi"},
 {judul:"Servis berkala gedung usaha",tipe:"Swasta",jenis:"Servis & perawatan"},
 {judul:"Pemasangan AC rumah tinggal",tipe:"Hunian",jenis:"Instalasi"},
 {judul:"Penjualan dan pemasangan unit",tipe:"Swasta",jenis:"Penjualan unit"},
 {judul:"Cuci AC ruang rapat",tipe:"Pemerintah",jenis:"Servis & perawatan"}];
var JKEB={"Instalasi":"Instalasi AC split / cassette","Servis & perawatan":"Cuci & servis AC berkala","Penjualan unit":"Beli unit AC"};
var DATA=PROJECTS.length?PROJECTS:DEMO.map(function(d){d.demo=1;return d}),FK="",FJ="",LIST=[],CUR=0;
function uniq(k){var r=[];DATA.forEach(function(p){if(p[k]&&r.indexOf(p[k])<0)r.push(p[k])});return r}
function mkChips(id,key,set){var box=$(id);if(uniq(key).length<2){box.hidden=true;return}["Semua"].concat(uniq(key)).forEach(function(v,i){
  var b=document.createElement("button");b.type="button";b.className="chip";b.textContent=v;b.setAttribute("aria-pressed",i===0);
  b.onclick=function(){set(i?v:"");[].forEach.call(box.children,function(x){x.setAttribute("aria-pressed",x===b)});renderGallery()};box.appendChild(b)})}
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function renderGallery(){
  var g=$("gallery");g.innerHTML="";
  LIST=DATA.filter(function(p){return(!FK||p.tipe===FK)&&(!FJ||p.jenis===FJ)});
  $("pcount").textContent=(PROJECTS.length?"":"Contoh tampilan: foto proyek asli akan menggantikan kotak ini. ")+"Menampilkan "+LIST.length+" dari "+DATA.length+" proyek.";
  LIST.forEach(function(p,i){
    var b=el("button","shot");b.type="button";b.style.animationDelay=(i*60)+"ms";b.setAttribute("aria-label","Lihat detail: "+p.judul);
    var m=p.foto||p.sesudah||p.poster;
    if(m){var im=el("img");im.src=m;im.alt=p.judul;im.loading="lazy";b.appendChild(im)}else b.appendChild(el("div","ph"));
    if(p.demo)b.appendChild(el("span","demo","Contoh tampilan"));
    b.appendChild(el("span","go","Lihat detail"));if(p.video)b.appendChild(el("span","play","▶"));
    var t=el("div","t");t.appendChild(el("b","",p.judul));t.appendChild(el("small","",[p.tipe,p.jenis].filter(Boolean).join(" · ")));b.appendChild(t);
    b.onclick=function(){openP(i)};g.appendChild(b);
  });
  if(!LIST.length)g.appendChild(el("p","small","Belum ada proyek untuk filter ini."));
}
function ba(a,b,demo){var w=el("div","ba");
  if(demo){var x=el("div","dv d2");x.appendChild(el("span","dl","Hasil setelah servis"));var y=el("div","dv d1 bf");y.appendChild(el("span","dl","Kondisi sebelum servis"));w.appendChild(x);w.appendChild(y)}
  else{var i2=el("img");i2.src=b;i2.alt="Sesudah";var i1=el("img","bf");i1.src=a;i1.alt="Sebelum";w.appendChild(i2);w.appendChild(i1)}
  w.appendChild(el("span","bl","Sebelum"));w.appendChild(el("span","al","Sesudah"));
  var r=el("input");r.type="range";r.min=0;r.max=100;r.value=50;r.setAttribute("aria-label","Geser untuk membandingkan sebelum dan sesudah");
  r.oninput=function(){w.style.setProperty("--pos",r.value+"%")};w.appendChild(r);return w}
function openP(i){
  CUR=(i+LIST.length)%LIST.length;var p=LIST[CUR],me=$("pmed");me.innerHTML="";
  if(p.video){var v=el("video");v.src=p.video;v.poster=p.poster;v.controls=true;v.playsInline=true;v.preload="metadata";me.appendChild(v)}else if((p.sebelum&&p.sesudah)||p.demo)me.appendChild(ba(p.sebelum,p.sesudah,p.demo));
  else if(p.foto){var im=el("img");im.src=p.foto;im.alt=p.judul;me.appendChild(im)}
  $("pt").textContent=p.tipe||"Proyek";$("ph3").textContent=p.judul;
  $("pmeta").textContent=[p.jenis,p.lokasi,p.tahun,p.unit].filter(Boolean).join(" · ");
  $("pket").textContent=p.ket||(p.demo?"Contoh tampilan. Geser penggeser untuk membandingkan kondisi sebelum dan sesudah pekerjaan.":"");
  $("ppos").textContent=(CUR+1)+" / "+LIST.length;
  $("pprev").disabled=$("pnext").disabled=LIST.length<2;
  if(!$("lb").open)$("lb").showModal();
}
$("pprev").onclick=function(){openP(CUR-1)};$("pnext").onclick=function(){openP(CUR+1)};
$("lbx").onclick=function(){$("lb").close()};$("lb").addEventListener("close",function(){var v=$("pmed").querySelector("video");if(v)v.pause()});
$("lb").addEventListener("click",function(e){if(e.target===this)this.close()});
$("lb").addEventListener("keydown",function(e){if(e.target.type==="range")return;if(e.key==="ArrowLeft")openP(CUR-1);if(e.key==="ArrowRight")openP(CUR+1)});
$("porder").onclick=function(){var p=LIST[CUR];$("lb").close();pick(JKEB[p.jenis]||"Instalasi AC split / cassette")};
mkChips("fk","tipe",function(v){FK=v});mkChips("fj","jenis",function(v){FJ=v});renderGallery();

/* Tentang interaktif */
var TABS=[].slice.call(document.querySelectorAll(".tabs button"));
function selTab(i,f){TABS.forEach(function(t,k){var on=k===i;t.setAttribute("aria-selected",on);t.tabIndex=on?0:-1;$("p"+(k+1)).hidden=!on});if(f)TABS[i].focus()}
TABS.forEach(function(t,i){t.onclick=function(){selTab(i)};t.onkeydown=function(e){var n=i;
  if(e.key==="ArrowDown"||e.key==="ArrowRight")n=(i+1)%TABS.length;else if(e.key==="ArrowUp"||e.key==="ArrowLeft")n=(i+TABS.length-1)%TABS.length;else if(e.key==="Home")n=0;else if(e.key==="End")n=TABS.length-1;else return;
  e.preventDefault();selTab(n,true)}});
[].forEach.call(document.querySelectorAll(".fl>button"),function(b){b.onclick=function(){var f=b.parentNode,o=f.classList.toggle("open");b.setAttribute("aria-expanded",o)}});
var SEG={"Hunian":"Instalasi AC split, servis dan perawatan, serta penjualan unit AC untuk rumah tinggal.","Perkantoran":"Instalasi AC split, cassette, dan central gedung, serta cuci dan servis berkala untuk kantor.","Industri":"Instalasi AC central gedung dan perawatan berkala untuk kebutuhan skala besar. Survei lokasi gratis lebih dulu."};
function selSeg(b){[].forEach.call($("seg").children,function(x){x.setAttribute("aria-pressed",x===b)});$("segd").textContent=SEG[b.textContent]}
[].forEach.call($("seg").children,function(b){b.onclick=function(){selSeg(b)}});selSeg($("seg").children[0]);
$("segb").onclick=function(){pick("Instalasi AC split / cassette")};
/* Produk */

[].forEach.call(document.querySelectorAll("[data-pick]"),function(b){b.onclick=function(){pick(b.getAttribute("data-pick"))}});
/* Formulir -> WhatsApp */
var NOMOR="628138886938";
var EMAIL="pt.gunarayateknik@gmail.com";
/* Salinan otomatis tiap pesanan ke email perusahaan lewat layanan FormSubmit (perlu aktivasi satu kali). Kosongkan untuk mematikan. */
var ENDPOINT="https://formsubmit.co/ajax/"+EMAIL;
/*WA-START*/
function fmtHP(n){var l="0"+n.slice(2);return l.slice(0,4)+"-"+l.slice(4,8)+"-"+l.slice(8)}
function normHP(v){var d=String(v).replace(/\D/g,"");if(d.indexOf("620")===0)d="62"+d.slice(3);else if(d.charAt(0)==="0")d="62"+d.slice(1);else if(d.charAt(0)==="8")d="62"+d;return d}
function hpOk(d){return /^628\d{8,11}$/.test(d)}
function tglID(s){var p=s.split("-");return new Date(+p[0],p[1]-1,+p[2]).toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}
function buildMsg(v){
  var t="Halo PT Guna Raya Teknik, saya ingin memesan layanan.\n\n*Kebutuhan:* "+v.kebutuhan+"\n*Nama:* "+v.nama+"\n*No. WhatsApp:* "+"0"+normHP(v.hp).slice(2)+"\n*Alamat lokasi:* "+v.alamat;
  if(v.jadwal)t+="\n*Jadwal survei:* "+tglID(v.jadwal);
  if(v.merek)t+="\n*Merek AC:* "+v.merek;
  if(v.jenis)t+="\n*Jenis AC:* "+v.jenis;
  if(v.gedung)t+="\n*Keterangan ruangan:* "+v.gedung;
  return t+"\n\nTerima kasih."}
function waURL(t,no){return "https://wa.me/"+(no||NOMOR)+"?text="+encodeURIComponent(t)}
/*WA-END*/
function syncWA(){
  [].forEach.call(document.querySelectorAll('a[href*="wa.me/"]'),function(a){a.href=a.href.replace(/wa\.me\/\d+/,"wa.me/"+NOMOR)});
  [].forEach.call(document.querySelectorAll("[data-wa]"),function(e){e.textContent=fmtHP(NOMOR)});
}
syncWA();
function isoLokal(){var d=new Date();return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2)}
$("f-jadwal").min=isoLokal();
function updCnt(){$("cnt").textContent=$("f-gedung").value.length+"/700"}
$("f-gedung").addEventListener("input",updCnt);updCnt();
function setErr(id,msg){var e=$("e-"+id),i=$("f-"+id);e.textContent=msg||"";if(i){if(msg)i.setAttribute("aria-invalid","true");else i.removeAttribute("aria-invalid")}}
["nama","hp","alamat","jadwal"].forEach(function(k){$("f-"+k).addEventListener("input",function(){setErr(k,"")})});
function readForm(){var d=new FormData($("f")),g=function(k){return String(d.get(k)||"").trim()};
  return {kebutuhan:g("kebutuhan"),nama:g("nama").replace(/\s+/g," "),hp:g("hp"),alamat:g("alamat").replace(/\s+/g," "),jadwal:g("jadwal"),merek:g("merek"),jenis:g("jenis"),gedung:g("gedung").replace(/\s*\n\s*/g,"\n")}}
function cekForm(v){var e={};
  if(v.nama.length<2)e.nama="Tulis nama Anda.";
  if(!hpOk(normHP(v.hp)))e.hp="Masukkan nomor WhatsApp yang valid, contoh 081234567890.";
  if(v.alamat.length<5)e.alamat="Tulis alamat lokasi dengan lengkap.";
  if(v.jadwal&&v.jadwal<isoLokal())e.jadwal="Pilih tanggal hari ini atau setelahnya.";
  return e}
function cekSemua(){var v=readForm(),er=cekForm(v),K=["nama","hp","alamat","jadwal"];
  K.forEach(function(k){setErr(k,er[k])});
  var first=K.filter(function(k){return er[k]})[0];
  if(first){$("f-"+first).focus();$("sent").hidden=true;return null}
  return v}
$("f").addEventListener("submit",function(ev){
  ev.preventDefault();
  var v=cekSemua();if(!v)return;
  var msg=buildMsg(v),url=waURL(msg),btn=$("f").querySelector("button[type=submit]"),done=false;
  $("prev").textContent=msg;$("openwa").href=url;btn.disabled=true;
  function panel(){$("sent").hidden=false;$("sent").scrollIntoView({behavior:"smooth",block:"center"});btn.disabled=false}
  function go(){
    if(done)return;done=true;
    var framed=false;try{framed=window.self!==window.top}catch(x){framed=true}
    if(!framed){btn.lastChild.textContent="Mengalihkan ke WhatsApp...";location.href=url;return}
    var w=null;try{w=window.open(url,"_blank")}catch(x){}
    panel();if(w)$("sent").querySelector("b").textContent="WhatsApp dibuka di tab baru"}
  if(ENDPOINT){
    try{fetch(ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},keepalive:true,body:JSON.stringify({_subject:"Pesanan baru dari website: "+v.kebutuhan+" - "+v.nama,_template:"table",_captcha:"false",nama:v.nama,hp:"0"+normHP(v.hp).slice(2),kebutuhan:v.kebutuhan,alamat:v.alamat,jadwal:v.jadwal,merek:v.merek,jenis:v.jenis,gedung:v.gedung,pesan:msg,tujuan:NOMOR})}).then(go,go)}catch(x){go()}
    setTimeout(go,4000);
  }else go();
});
addEventListener("pageshow",function(e){if(e.persisted){var b=$("f").querySelector("button[type=submit]");b.disabled=false;b.lastChild.textContent="Kirim lewat WhatsApp"}});

$("mailbtn").onclick=function(){
  var v=cekSemua();if(!v)return;
  var body=buildMsg(v).replace(/\*/g,""),url="mailto:"+EMAIL+"?subject="+encodeURIComponent("Permintaan "+v.kebutuhan+" - "+v.nama)+"&body="+encodeURIComponent(body);
  $("prev").textContent=body;$("openmail").href=url;$("openwa").href=waURL(buildMsg(v));
  var framed=false;try{framed=window.self!==window.top}catch(x){framed=true}
  if(!framed){location.href=url;return}
  $("sent").hidden=false;$("sent").querySelector("b").textContent="Email Anda siap dikirim";$("sent").scrollIntoView({behavior:"smooth",block:"center"});
};
$("copywa").onclick=function(){var t=$("prev").textContent,b=$("copywa");
  function ok(){b.textContent="Tersalin";setTimeout(function(){b.textContent="Salin pesan"},1800)}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(ok,fb)}else fb();
  function fb(){var a=document.createElement("textarea");a.value=t;a.style.position="fixed";a.style.opacity="0";document.body.appendChild(a);a.select();try{document.execCommand("copy");ok()}catch(x){b.textContent="Salin manual"}document.body.removeChild(a)}};
$("editwa").onclick=function(){$("sent").hidden=true;$("f-nama").focus()};
$("y").textContent=new Date().getFullYear();$("totop").onclick=function(){scrollTo({top:0,behavior:reduce?"auto":"smooth"})};

document.documentElement.classList.add("js");
var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches,T=24;
function setT(v){T=Math.max(16,Math.min(30,v));var a=$("ac");a.style.setProperty("--w",(T-16)/14);a.style.setProperty("--dur",(1.2+(T-16)*.2)+"s");$("tv").textContent=T+"°C";
  $("tmsg").textContent=T<=19?"Sangat dingin. Suhu 24–26°C biasanya lebih nyaman dan hemat listrik.":T<=26?"Suhu nyaman untuk bekerja dan beristirahat.":"Mulai hangat. Turunkan sedikit jika ruangan terasa gerah."}
$("tdn").onclick=function(){setT(T-1)};$("tup").onclick=function(){setT(T+1)};setT(24);
[].forEach.call(document.querySelectorAll(".areas li"),function(li){var t=li.textContent;li.textContent="";var b=document.createElement("button");b.type="button";b.className="chip";b.textContent=t;b.title="Isi alamat dengan area ini";
  b.onclick=function(){var a=document.querySelector("[name=alamat]");if(!a.value)a.value=t+", ";pick();a.focus({preventScroll:true})};li.appendChild(b)});
$("tog").onclick=function(){var r=document.documentElement,d=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme: dark)").matches;r.dataset.theme=d?"light":"dark"};
addEventListener("scroll",function(){var h=document.documentElement;$("prog").style.width=(h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)*100)+"%"},{passive:true});
if("IntersectionObserver" in window&&!reduce){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
  [].forEach.call(document.querySelectorAll(".card,.steps li,.shot,.areas li"),function(el){el.classList.add("rv");io.observe(el)});
  [].forEach.call(document.querySelectorAll("[data-n]"),function(b){var n=+b.dataset.n,o=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;o.disconnect();var s=performance.now();(function f(t){var p=Math.min(1,(t-s)/1300);b.textContent=Math.round(n*(1-Math.pow(1-p,3)))+"+";if(p<1)requestAnimationFrame(f)})(s)});o.observe(b)});
}

var PKT=[[5000,"1/2 PK"],[7000,"3/4 PK"],[9000,"1 PK"],[12000,"1,5 PK"],[18000,"2 PK"],[22000,"2,5 PK"],[28000,"3 PK"],[42000,"5 PK"]],CR={};
function nv(id,d,a,b){var x=parseFloat($(id).value);return isNaN(x)?d:Math.min(b,Math.max(a,x))}
function fm(n){return Math.round(n).toLocaleString("id-ID")}
function hitung(){
  var p=nv("cp",5,1,60),l=nv("cl",4,1,60),t=nv("ct",3,2,10),n=nv("cn",2,1,200),pc=nv("cpc",0,0,100),tv=nv("ctv",0,0,50),A=p*l;
  var hf=Math.min(1.8,Math.max(.9,t/2.7)),base=A*500*hf;
  var adj=+$("clok").value+ +$("csun").value+($("cdoor").checked?.1:0),sub=base*(1+adj);
  var occ=Math.max(0,n-2)*600,eq=pc*400+tv*250+($("ckit").checked?4000:0),tot=Math.round((sub+occ+eq)/100)*100,r=null;
  for(var i=0;i<PKT.length;i++){if(PKT[i][0]>=tot*.95){r=PKT[i];break}}
  var big=!r,u=Math.ceil(tot/28000);
  $("pk").textContent=big?"Multi unit":r[1];$("btu").textContent=fm(tot)+" BTU/h";
  $("garc").style.strokeDasharray=Math.min(100,tot/42000*100)+" 100";
  $("cdesc").textContent=big?"Kebutuhan melebihi satu unit split. Sekitar "+u+" unit 3 PK, atau AC central / cassette. Perlu survei.":"Rekomendasi: AC "+r[1]+" ("+fm(r[0])+" BTU/h) untuk ruangan ±"+A.toFixed(1)+" m².";
  var rows=[["Dasar ruangan ("+A.toFixed(1)+" m² × tinggi "+t+" m)",fm(base)],["Penyesuaian lokasi, matahari, pintu","+"+Math.round(adj*100)+"%"],["Penghuni tambahan ("+Math.max(0,n-2)+" orang)","+"+fm(occ)],["Peralatan panas","+"+fm(eq)]];
  $("brk").innerHTML="";rows.forEach(function(x){var li=document.createElement("li"),a=document.createElement("span"),b=document.createElement("b");a.textContent=x[0];b.textContent=x[1];li.appendChild(a);li.appendChild(b);$("brk").appendChild(li)});
  CR={p:p,l:l,t:t,n:n,pk:big?"beberapa unit / central":r[1],tot:tot,A:A};
}
[].forEach.call(document.querySelectorAll("#calc input,#calc select"),function(e){e.addEventListener("input",hitung);e.addEventListener("change",hitung)});
hitung();
$("usepk").onclick=function(){var g=document.querySelector("[name=gedung]");
  g.value="Ruangan "+CR.p+" × "+CR.l+" m (±"+CR.A.toFixed(1)+" m²), plafon "+CR.t+" m, "+CR.n+" penghuni. Hasil kalkulator: ±"+fm(CR.tot)+" BTU/h, rekomendasi "+CR.pk+". "+g.value;pick("Beli unit AC")};

var AREAS=[
 {n:"Kota Makassar",x:72,y:387,d:"Kawasan hunian dan perkantoran di Kota Makassar, yang berbatasan langsung dengan Kabupaten Gowa.",q:"Kota Makassar, Sulawesi Selatan"},
 {n:"Kab. Gowa",x:108,y:408,hq:1,t:"Pusat operasional",d:"Titik lokasi resmi perusahaan ada di Tombolo, Kecamatan Somba Opu. Posisinya dekat perbatasan Gowa dan Makassar, sehingga memudahkan panggilan servis, instalasi, dan perbaikan AC untuk kawasan hunian dan perkantoran di sekitarnya.",a:"Jl. Yompo Dg. Naba Lr. 1, Tombolo, Kec. Somba Opu, Kab. Gowa, Sulawesi Selatan",q:"Jl. Yompo Dg. Naba Lr. 1, Somba Opu, Gowa, Sulawesi Selatan"},
 {n:"Kab. Maros",x:138,y:342,d:"Area layanan di utara Kota Makassar.",q:"Kabupaten Maros, Sulawesi Selatan"},
 {n:"Kab. Takalar",x:122,y:471,d:"Area layanan di selatan Kabupaten Gowa.",q:"Kabupaten Takalar, Sulawesi Selatan"},
 {n:"Kab. Pangkep",x:128,y:294,d:"Area layanan di utara Kabupaten Maros.",q:"Kabupaten Pangkajene dan Kepulauan, Sulawesi Selatan"},
 {n:"Kota Parepare",x:160,y:48,d:"Area layanan di pesisir barat Sulawesi Selatan bagian utara.",q:"Kota Parepare, Sulawesi Selatan"}];
function selArea(i){
  var a=AREAS[i];
  [].forEach.call(document.querySelectorAll(".pin"),function(p,k){p.setAttribute("aria-pressed",k===i)});
  [].forEach.call($("achips").children,function(c,k){c.setAttribute("aria-pressed",k===i)});
  var lc=$("lc");lc.innerHTML="";
  function add(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;e.textContent=txt;lc.appendChild(e);return e}
  add("span","tag"+(a.hq?" hq":""),a.t||"Area layanan");add("h3","",a.n);add("p","",a.d);
  if(a.a)add("p","addr",a.a);
  var c=document.createElement("div");c.className="cta";
  var b=document.createElement("button");b.type="button";b.className="btn btn-main btn-sm";b.textContent="Pesan layanan di area ini";
  b.onclick=function(){var f=document.querySelector("[name=alamat]");if(!f.value)f.value=a.n+", ";pick();f.focus({preventScroll:true})};
  var m=document.createElement("a");m.className="btn btn-line btn-sm";m.target="_blank";m.rel="noopener";m.textContent="Buka di Google Maps";
  m.href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(a.q);
  c.appendChild(b);c.appendChild(m);lc.appendChild(c);
}
AREAS.forEach(function(a,i){
  var p=document.createElement("button");p.type="button";p.className="pin"+(a.hq?" hq":"");p.dataset.n=a.n;p.setAttribute("aria-label",a.n);
  p.style.left=(a.x/300*100)+"%";p.style.top=(a.y/520*100)+"%";p.textContent=a.hq?"★":i+1;p.onclick=function(){selArea(i)};$("map").appendChild(p);
  var c=document.createElement("button");c.type="button";c.className="chip";c.textContent=a.n;c.onclick=function(){selArea(i)};$("achips").appendChild(c);
});
selArea(1);

/* ===== Katalog & router ===== */
var BR=[
{id:"daikin",n:"Daikin",c:"#0097e0",w:"up",d:"Pabrikan pendingin udara asal Jepang. Di Indonesia tersedia AC split standar dan inverter, serta AC cassette Sky Air berteknologi inverter dengan refrigeran R32.",p:[
["FTKQ Series","Split","Inverter","0,5 – 2 PK",["Pendinginan stabil dengan konsumsi daya lebih hemat","Pilihan 0,5; 1,5; dan 2 PK"],"FTKQ15UVM4, FTKQ35UVM4, FTKQ50UVM4"],
["FTKC Series","Split","Inverter","0,5 – 1,5 PK",["Teknologi inverter","Pilihan 0,5; 0,75; dan 1,5 PK"],"FTKC15TVM4, FTKC20TVM4, FTKC35TVM4"],
["FTV Series","Split","Standar","0,5 – 1 PK",["AC split standar (non-inverter)","Cocok untuk kamar dan ruang kecil"],"FTV15CXV14, FTV25CXV14"],
["FTC Series","Split","Standar","0,5 – 2 PK",["AC split standar (non-inverter)","Pilihan hingga 2 PK untuk ruang keluarga"],"FTC15NV14, FTC20NV14, FTC35NV14, FTC50XV14"],
["Sky Air Cassette","Cassette","Inverter","Sesuai kebutuhan ruangan",["Dipasang di plafon","Inverter dan hemat energi","Refrigeran R32 yang lebih ramah lingkungan"],"Model ditentukan setelah survei"]]},
{id:"panasonic",n:"Panasonic",c:"#0041c0",w:"",d:"Merek elektronik asal Jepang dengan AC split inverter untuk hunian, dari seri PU hingga Deluxe Inverter Nanoe-X.",p:[
["PU Series","Split","Inverter","0,5 – 2 PK",["Teknologi inverter","Pilihan 0,5; 0,75; 1; 1,5; dan 2 PK"],"CS/CU-PU5AKJ, PU7AKJ, PU9AKJ, PU12AKJ, PU18AKJ"],
["Deluxe Inverter Nanoe-X (RU)","Split","Inverter","Contoh 2 PK",["Inverter","Teknologi Nanoe-X","Contoh model 2 PK: 18.100 Btu/h"],"CS/CU-RU18AKJ"]]},
{id:"sharp",n:"Sharp",c:"#e60012",w:"up",d:"Merek asal Jepang. Sharp Indonesia mulai mengoperasikan pabrik AC di Karawang pada 2023 dan memperkenalkan Garuda Series, AC buatan Indonesia.",p:[
["J-Tech Inverter (X Series)","Split","Inverter","0,5 – 2 PK",["J-Tech Inverter","Super Jet Mode untuk pendinginan cepat","Coanda Air Flow tanpa hembusan langsung"],"AH-X6BEY, AH-X10BEY, AH-X13BEY, AH-X18ZY"],
["J-Tech Inverter + Plasmacluster (XP Series)","Split","Inverter","0,5 – 1,5 PK",["J-Tech Inverter","Plasmacluster Ion","Garuda Wing Air Flow"],"AH-XP6BMY, AH-XP8BMY, AH-XP10BMY, AH-XP13BMY"],
["Standard (A Series)","Split","Standar","0,5 – 2 PK",["AC split standar (non-inverter)","Pilihan 0,5; 1; dan 2 PK"],"AH-A5BEY, AH-A9BEYT, AH-A18ZCY"]]},
{id:"lg",n:"LG",c:"#a50034",w:"lg",d:"Merek asal Korea Selatan. Pada 2026 LG memperkenalkan tiga lini AC baru di Indonesia: DUALCOOL AI Air, DUALCOOL New Terminator Inverter, dan TURBOCOOL New Terminator.",p:[
["DUALCOOL AI Air","Split","Inverter","Beberapa kapasitas",["AI yang menyesuaikan pengaturan pendinginan","Window Detection","Terhubung ke LG ThinQ"],"Lini baru 2026"],
["DUALCOOL New Terminator Inverter","Split","Inverter","Beberapa kapasitas",["Dual Inverter Compressor","Untuk ruangan sekitar 6–18 m²","Garansi kompresor hingga 10 tahun"],"Lini baru 2026"],
["TURBOCOOL New Terminator (NSB)","Split","","Beberapa kapasitas",["Lini baru yang diluncurkan bersama DUALCOOL","Garansi suku cadang dan PCB 10 tahun (seri NSB)"],"Lini baru 2026"]]},
{id:"samsung",n:"Samsung",c:"#1428a0",w:"up sam",d:"Merek asal Korea Selatan, dikenal lewat teknologi WindFree yang mendinginkan tanpa hembusan angin langsung.",p:[
["WindFree Lite","Split","Inverter","Contoh 1,5 PK",["Digital Inverter","WindFree: mengurangi hembusan angin langsung","Contoh model 1,5 PK: 12.000 Btu/h"],"AR13BYFANWKNSE"],
["WindFree Ultra + Air Purification","Split","Inverter","Contoh 1 PK",["WindFree Cooling","Dilengkapi air purification","Contoh model 1 PK: 9.000 Btu/h"],"AR10CYKAAWKNSE"],
["Alpha Inverter","Split","Inverter","0,5 – 1,5 PK",["Teknologi inverter","Panjang pipa hingga 15 m"],"AR05AYHLAWKNSE, AR09AYHLAWKNSE, AR12AYHLAWKNSE"],
["Digital Inverter Boost","Split","Inverter","1 – 2 PK",["Digital Inverter Boost","Diklaim pabrikan mendinginkan 43% lebih cepat"],"AR10CYFAAWKNSE, AR12BGHQASINSE, AR18BGHQASINSE"]]},
{id:"gree",n:"Gree",c:"#1b9e4b",w:"",d:"Merek AC asal Tiongkok dengan banyak pilihan AC split inverter dan standar, serta AC floor standing.",p:[
["F5S Series","Split","Inverter","0,5 – 2,5 PK",["Smart Cleaner System","Powerdrops untuk hemat listrik","Double Louver"],"GWC-05F5S, GWC-09F5S, GWC-12F5S, GWC-18F5S, GWC-24F5S"],
["F1S Series","Split","Inverter","0,5 – 1,5 PK",["Inverter F1S","Eco Save Button","Refrigeran R32"],"GWC-05F1S, GWC-09F1S, GWC-12F1S"],
["AIRY Series","Split","Inverter","1 – 3 PK",["Wi-Fi dan Smart Voice Control","G-Learning dan G-Boost"],"GWC-09AIRY, GWC-24AIRY, GWC-30AIRY"],
["Standard N1 Series","Split","Standar","0,5 – 1 PK",["Automatic Smart Cleaner","Black Fin & Gold Fin Protection"],"GWC-05N1A, GWC-07N1, GWC-09N1"],
["Floor Standing STS","Standing floor","Inverter · Standar","2 – 3 PK",["Smart Wi-Fi dan LED display","Tipe berdiri di lantai"],"GVC-24STS (3 PK, inverter), GVC-18STS (2 PK, standar)"]]}];
var KB="",KT="",KK="";
function wm(b,sz){var s=el("span","wm "+b.w+(sz?" "+sz:""));s.style.setProperty("--c",b.c);if(b.logo){var i=el("img");i.src=b.logo;i.alt=b.n;s.appendChild(i)}else s.textContent=b.w==="lg"?"LG":b.n;s.setAttribute("aria-label",b.n);return s}
function ask(b,p){
  var j=document.querySelector("[name=jenis]"),g=document.querySelector("[name=gedung]");
  j.value=p[1];
  g.value="Unit diminati: "+b.n+" "+p[0]+" ("+p[1]+(p[2]?", "+p[2]:"")+")\n"+g.value.replace(/^Unit diminati:.*\n?/,"");
  pick("Beli unit AC",b.n);
}
/* kartu merek di beranda */
BR.forEach(function(b){
  var a=el("article","card bc");a.appendChild(wm(b,"big"));a.appendChild(el("p","",b.p.length+" seri produk"));
  var c=el("div","cta"),l=el("a","btn btn-main btn-sm","Lihat katalog");l.href="#/katalog/"+b.id;
  var q=el("button","btn btn-line btn-sm","Tanya unit");q.type="button";q.onclick=function(){pick("Beli unit AC",b.n)};
  c.appendChild(l);c.appendChild(q);a.appendChild(c);$("brands").appendChild(a);
});
/* halaman katalog */
function mkKChips(id,vals,set){var box=$(id);["Semua"].concat(vals).forEach(function(v,i){
  var b=el("button","chip",i?v:(id==="kt"?"Semua tipe":"Semua teknologi"));b.type="button";b.setAttribute("aria-pressed",i===0);
  b.onclick=function(){set(i?v:"");[].forEach.call(box.children,function(x){x.setAttribute("aria-pressed",x===b)});renderKat()};box.appendChild(b)})}
mkKChips("kt",["Split","Cassette","Standing floor"],function(v){KT=v});mkKChips("kk",["Inverter","Standar"],function(v){KK=v});
var bs=$("bstrip");
[{id:"",n:"Semua merek"}].concat(BR).forEach(function(b){
  var t=el("button","bt");t.type="button";t.dataset.id=b.id;
  if(b.id){t.appendChild(wm(b));t.appendChild(el("small","",b.p.length+" seri"))}else{t.appendChild(el("b","","Semua"));t.appendChild(el("small","",BR.reduce(function(s,x){return s+x.p.length},0)+" seri"))}
  t.onclick=function(){location.hash=b.id?"#/katalog/"+b.id:"#/katalog"};bs.appendChild(t);
});
function renderKat(){
  [].forEach.call(bs.children,function(t){t.setAttribute("aria-pressed",t.dataset.id===KB)});
  var bi=$("binfo");bi.innerHTML="";
  var cur=BR.filter(function(b){return b.id===KB})[0];
  if(cur){bi.hidden=false;bi.appendChild(wm(cur,"big"));bi.appendChild(el("p","",cur.d));bi.appendChild(el("span","tg","Garansi resmi pabrikan"))}else bi.hidden=true;
  var g=$("kgrid");g.innerHTML="";var n=0;
  BR.forEach(function(b){if(KB&&b.id!==KB)return;
    b.p.forEach(function(p,i){
      if(KT&&p[1]!==KT)return;if(KK&&p[2].indexOf(KK)<0)return;n++;
      var c=el("article","pc");c.style.animationDelay=(n%9*50)+"ms";
      var im=el("div","pimg");
      if(p[6]){var ii=el("img");ii.src=p[6];ii.alt=b.n+" "+p[0];ii.loading="lazy";im.appendChild(ii)}
      else{im.innerHTML='<svg class="aci" aria-hidden="true"><use href="#i-ac-'+(p[1]==="Cassette"?"cassette":p[1]==="Standing floor"?"floor":"split")+'"/></svg>';im.appendChild(el("span","il","Ilustrasi tipe"))}
      c.appendChild(im);
      var top=el("div","pc-top");top.appendChild(wm(b,"sm"));if(p[2])top.appendChild(el("span","tg"+(p[2].indexOf("Inverter")>=0?"":" ink"),p[2]));
      c.appendChild(top);c.appendChild(el("h3","",p[0]));c.appendChild(el("p","tp",p[1]+" · "+p[3]));
      var ul=el("ul");p[4].forEach(function(f){ul.appendChild(el("li","",f))});c.appendChild(ul);
      c.appendChild(el("p","md","Contoh model: "+p[5]));
      var q=el("button","btn btn-main btn-sm","Tanya unit ini");q.type="button";q.onclick=function(){ask(b,p)};c.appendChild(q);g.appendChild(c);
    });
  });
  $("kcount").textContent="Menampilkan "+n+" seri produk"+(cur?" "+cur.n:" dari "+BR.length+" merek")+".";
  if(!n)g.appendChild(el("p","small","Belum ada seri untuk filter ini. Coba ubah filter, atau tanyakan langsung kepada kami."));
}
/* router hash: beranda dan katalog */
function route(){
  var hs=location.hash||"",m=hs.match(/^#\/katalog(?:\/([a-z]+))?$/);
  if(m){
    KB=m[1]&&BR.some(function(b){return b.id===m[1]})?m[1]:"";
    $("top").hidden=true;$("katalog").hidden=false;renderKat();
    document.title=(KB?BR.filter(function(b){return b.id===KB})[0].n+" – ":"")+"Katalog Produk AC | PT Guna Raya Teknik";
    scrollTo({top:0,behavior:"auto"});
  }else{
    $("katalog").hidden=true;$("top").hidden=false;
    document.title="PT Guna Raya Teknik – Instalasi, Servis & Penjualan AC di Sulawesi Selatan";
    var e=hs.length>1?document.getElementById(hs.slice(1)):null;
    if(e)e.scrollIntoView();else scrollTo({top:0,behavior:"auto"});
  }
}
addEventListener("hashchange",route);route();
