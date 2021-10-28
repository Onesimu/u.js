<template>
#pg.pg(@click='click')
  #d0.d.d0
    #i2.i.i2
    #i3.i.i3
    #i0.i.i0
  #i56.i56
  ul#d3.d.d3
    li 日
    li 一
    li 二
    li 三
    li 四
    li 五
    li 六
  ul#d2.d.d2
    li#e1.e.e1
  #d5.d5
  #i5.i5 今日规划
  ul#d1.d.d1
    li#e2.d.e2
      #i58.i.t.i58
      #i1.i.t.i1
      #i61.i.i61
  #a1.a.a1
</template>

<style scoped>
  .pg { bgc: #fff; hm: 100vh; }

  .d0 { ps: sticky; z: 1; t: 0; bgc: white; }
  .d0 { h: 40; bb: 0.5px solid #F5F5F5; }
  .i0 { w: 80; h: 24; bgc: #ccc; o: 0.5; bo: 27; fl: r; mt: 5; mr: 18; }
  .i0 { bgi: url("data:image/svg+xml,%3Csvg width='80' height='24' viewBox='0 0 80 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect opacity='.5' width='80' height='24' rx='12' fill='%23CCC'/%3E%3Crect x='2.5' y='2' width='36' height='20' rx='10' fill='%23fff'/%3E%3Cpath d='M25.328 6.676V17.14h-.876v-.912h-5.676v.924h-.864V6.676h7.416zm-6.552 8.712h5.676v-3.612h-5.676v3.612zm0-4.452h5.676v-3.42h-5.676v3.42z' fill='%23000'/%3E%3Cpath d='M57.256 10.408v2.16h5.124v-2.16h-5.124zm5.124-.804v-2.1h-5.124v2.1h5.124zm-5.172 3.768c-.144 1.56-.604 2.848-1.38 3.864l-.66-.6c.784-1.072 1.188-2.44 1.212-4.104V6.676h6.876v9.384c0 .688-.34 1.032-1.02 1.032h-1.548l-.24-.852c.736.032 1.24.048 1.512.048.28 0 .42-.176.42-.528v-2.388h-5.172z' fill='%23333'/%3E%3C/svg%3E"); }

  .i2, .i3 { w: 30; h: 30; mt: 5; bd: 0.5 s #F5F5F5; bo: 15; ml: 16; bgs: 16; }
  .i2 { bgi: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)' fill='%23333'%3E%3Cpath d='M4.286 7.355c.217 0 .434.087.608.252l7.05 6.98a.862.862 0 0 1 .009 1.216.862.862 0 0 1-1.216.009l-7.05-6.98a.862.862 0 0 1-.009-1.216.784.784 0 0 1 .608-.26z'/%3E%3Cpath d='M11.258.305a.862.862 0 0 1 .616 1.467l-6.98 7.05a.862.862 0 0 1-1.215.01.862.862 0 0 1-.01-1.216L10.65.566a.842.842 0 0 1 .608-.26z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' transform='rotate(90 7.944 8.056)' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E") }
  .i3 { bgi: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.384 15.887H9.33a.555.555 0 0 1-.568-.568v-3.14h-1.75v3.14a.552.552 0 0 1-.569.568H3.44a1.707 1.707 0 0 1-1.704-1.704V9.206h-.323A1.313 1.313 0 0 1 .087 7.881a1.288 1.288 0 0 1 .37-.915L6.2.884A2.483 2.483 0 0 1 9.694.782a.185.185 0 0 0 .095.095l5.742 6.089a1.317 1.317 0 0 1-.962 2.24h-.49v4.977a1.705 1.705 0 0 1-1.695 1.704zm-2.47-1.136h2.462a.596.596 0 0 0 .591-.592V8.638a.551.551 0 0 1 .568-.568H14.6a.185.185 0 0 0 .174-.126.2.2 0 0 0-.048-.22L8.96 1.664a1.331 1.331 0 0 0-1.9-.047.051.051 0 0 0-.048.047L1.27 7.731a.196.196 0 0 0 0 .268.182.182 0 0 0 .15.047h.915a.552.552 0 0 1 .568.568v5.545a.596.596 0 0 0 .591.592h2.43v-2.73a1.136 1.136 0 0 1 1.135-1.135h1.752a1.136 1.136 0 0 1 1.135 1.136l-.031 2.729z' fill='%23333'/%3E%3C/svg%3E")}

  .i56 { ps: sticky;  z: 1; t: 40; bgc: white; }
  .i56 { lh: 62; fw: bd; f: 22; ti: 16; c: #000000; }
  .i56::before { con: var(--i56); }

  .d3 { ps: sticky; z: 1; t: 102; bgc: white; }
  .d2, .d3 {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-row-gap: 1ex;
  }
  .d3 { c: #333; f: 13; mb: 1em; }
  .d3 > li:last-child {c: #A3A3A3;}
  .d3 > li:first-child {c: #A3A3A3;}

  .d2 { f: 16; c: #E5E5E5; ta: c; }
  .e1 { bo: 50%; w: 30; lh: 25; h: 30; }
  .e1::before { con: attr(i) }
  .e1[c='1'] { c: #333; }
  .e1[c='2']::before { con: '今' }
  .e1[c='2'] { fw: bd; c: #FF2638; o: 0.3; bgi: lg(141.52deg, #FF4034 15.83%, #FF5C4E 82.71%); bsd: 0px 1px 4px rgba(255, 66, 60, 0.3);}
  .e1[c='3'] { fw: bd; c: #fff; bgi: lg(141.52deg, #FF4034 59px, #FF5C4E 310px); bsd: 0 1px 4px rgba(255, 66, 60, 0.3); }
  .e1[h='1']::after { con: ''; w: 4; h: 4; bgc: #FF4135; d: bl; m: a; bo: 50%; }
  .e1[h='1'][c='3']::after { bgc: #fff; }

  .d5 { w: 40; h: 4; bgc: #F1F1F1; bo: 29; m: 10 auto; }
 .i5 { lh: 54; fw: bd; f: 16; c: #000000; ti: 16; mt: 10; }

  /* .d1 { ov: a; h: calc(90vh - 240px); } */
 .d1:empty { h: 177; bgi: url("data:image/svg+xml,%3Csvg width='376' height='178' viewBox='0 0 376 178' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle opacity='.5' cx='188.5' cy='100.5' r='62' fill='url(%23paint0_linear)'/%3E%3Cmask id='a' maskUnits='userSpaceOnUse' x='126' y='38' width='125' height='125'%3E%3Ccircle cx='188.5' cy='100.5' r='62' fill='url(%23paint1_linear)'/%3E%3C/mask%3E%3Cg mask='url(%23a)'%3E%3Cpath d='M141.535 139.048h43.325V81.491l-43.325 11.368v46.189z' fill='url(%23paint2_linear)'/%3E%3Cpath d='M237.129 119.696H184.86V81.491l52.269 11.94v26.265z' fill='url(%23paint3_linear)'/%3E%3Cpath d='M141.535 92.859L126.5 110.772l15.035 6.719V92.859z' fill='url(%23paint4_linear)'/%3E%3Cpath d='M192.653 162.5l-51.118-20.734V92.859l51.118 13.013V162.5z' fill='url(%23paint5_linear)'/%3E%3Cpath d='M192.653 162.5l44.476-21.45V93.43l-44.476 12.442V162.5z' fill='url(%23paint6_linear)'/%3E%3Cpath d='M237.129 93.43l15.061 20.163-43.615 17.304-15.922-25.025 44.476-12.442z' fill='url(%23paint7_linear)'/%3E%3Cpath d='M141.535 92.859l-13.516 22.592 53.053 17.52 11.581-27.099-51.118-13.013z' fill='url(%23paint8_linear)'/%3E%3C/g%3E%3Cpath opacity='.7' fill-rule='evenodd' clip-rule='evenodd' d='M141.247 26.03s.722 4.13 2.06 6.122c1.338 1.993 5.162 3.462 5.162 3.462s-4.265.643-5.809 1.806c-1.543 1.163-3.775 5.416-3.775 5.416s-.558-4.48-1.777-6.098c-1.219-1.617-5.444-3.486-5.444-3.486s4.016-.136 6.091-1.781c2.075-1.646 3.492-5.44 3.492-5.44z' fill='url(%23paint9_linear)'/%3E%3Cg opacity='.4'%3E%3Cpath opacity='.7' fill-rule='evenodd' clip-rule='evenodd' d='M105.551 128s6.105 3.396 10.09 3.753c3.984.357 9.897-3.055 9.897-3.055s-3.641 6.199-3.753 9.418c-.112 3.219 3.055 10.57 3.055 10.57s-6.388-3.976-9.761-4.094c-3.374-.117-10.226 3.396-10.226 3.396s4.036-5.345 4.081-9.758c.046-4.414-3.383-10.23-3.383-10.23z' fill='url(%23paint10_linear)'/%3E%3C/g%3E%3Cpath opacity='.7' fill-rule='evenodd' clip-rule='evenodd' d='M255.729 51.5s2.214 4.36 4.386 6.128c2.173 1.767 6.94 2.1 6.94 2.1s-4.539 2.173-5.864 3.997c-1.326 1.824-2.365 7.33-2.365 7.33s-2.151-4.808-4.062-6.197c-1.912-1.388-7.264-2.032-7.264-2.032s4.434-1.522 6.188-4.065c1.754-2.544 2.041-7.261 2.041-7.261z' fill='url(%23paint11_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='188.5' y1='38.5' x2='188.5' y2='220.285' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF2638' stop-opacity='.26'/%3E%3Cstop offset='1' stop-color='%23FF2638' stop-opacity='.02'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='188.5' y1='38.5' x2='188.5' y2='140.5' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF2638'/%3E%3Cstop offset='1' stop-color='%23FF2638'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear' x1='141.533' y1='110.269' x2='184.862' y2='110.269' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFCACF'/%3E%3Cstop offset='1' stop-color='%23FF9AA3'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear' x1='184.862' y1='100.593' x2='237.127' y2='100.593' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFD7DA'/%3E%3Cstop offset='1' stop-color='%23FF9AA3'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint4_linear' x1='134.017' y1='117.49' x2='134.017' y2='92.859' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFADB4'/%3E%3Cstop offset='.971' stop-color='%23FFB7BC'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint5_linear' x1='141.533' y1='127.679' x2='192.655' y2='127.679' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFD5D8'/%3E%3Cstop offset='1' stop-color='%23FFB7BD'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint6_linear' x1='182.62' y1='150.539' x2='242.726' y2='100.104' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFE2E4'/%3E%3Cstop offset='.971' stop-color='%23FF9AA3'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint7_linear' x1='192.655' y1='112.164' x2='252.19' y2='112.164' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFDBDE'/%3E%3Cstop offset='1' stop-color='%23FFF1F2'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint8_linear' x1='128.02' y1='112.914' x2='192.655' y2='112.914' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFF1F2'/%3E%3Cstop offset='1' stop-color='%23FFDBDE'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint9_linear' x1='141.289' y1='27.03' x2='139.289' y2='42.03' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF2638' stop-opacity='.5'/%3E%3Cstop offset='1' stop-color='%23DB301F' stop-opacity='.1'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint10_linear' x1='115.544' y1='128.349' x2='114.846' y2='148.337' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF2638' stop-opacity='.62'/%3E%3Cstop offset='1' stop-color='%23DB301F' stop-opacity='.1'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint11_linear' x1='255.5' y1='51.5' x2='258.5' y2='70' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.078' stop-color='%23FF2638' stop-opacity='.62'/%3E%3Cstop offset='1' stop-color='%23DB301F' stop-opacity='.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"); }
 .d1:empty::after { con: '今天没有任何安排哟，快去添加吧～'; ta: c; c: #999; f: 14; mt: 188; w: 100%; d: ib; }
 .e2 { mb: 10; hm: 64; }
 .e2[h='1'] { bgc: #F8F8FA; }

 .i58 { lh: 34; fw: bd; f: 14; c: #000000; ti: 20; }
 .i58::before { bgc: #EBECF0; w: 15; h: 15; bo: 50%; mr: 10; con: ''; d: ib; ps: re; }
 .i58::after { con: var(--summary); }
 .e2[h='1'] .i58::before { bgi: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='7.5' fill='%238CE754'/%3E%3Cpath d='M6.245 13s1.7-3.189 3.655-5.946C11.41 4.924 13.29 3.06 13.29 3.06l-.39-1.06s-2.233 1.507-4.042 3.357c-1.834 1.877-3.243 4.1-3.243 4.1l-2.77-2.522-1.133 1.172L6.245 13z' fill='%23fff'/%3E%3C/svg%3E"); }
 .e2[h='1'] .i58::before { bgc: #8CE754; }

 .i1 { w: 72; lh: 32; f: 12; c: #999999; fl: r; }
 .i1::after { con: var(--time); }
  .e2[h='1'] .i1 { c: #000000;  }

 .i61 { w: 313; f: 12; c: #999999; ml: 42; }
 .i61::after { con: var(--description); }
 .i61::before { con: ''; w: 1; h: 70; ps: ab; bl: 1 dashed #E7E9ED; l: 27; mt: -12; }
 .e2:last-child .i61::before { con: no; }

  .a1 { ps: fixed; w: 48; h: 48; r: 20; b: 20; bsd: 0px 1px 4px rgba(255, 66, 60, 0.3); bo: 50%; bgs: 20px, 100%;
    bgi: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 2a2 2 0 1 0-4 0v6H2a2 2 0 1 0 0 4h6v6a2 2 0 1 0 4 0v-6h6a2 2 0 1 0 0-4h-6V2z' fill='%23fff'/%3E%3C/svg%3E"), linear-gradient(180deg, #FF4034 0%, #FF5C4E 102.08%); }
</style>
