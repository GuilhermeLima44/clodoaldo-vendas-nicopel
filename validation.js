(function(root){
 const areaCodes=new Set('11 12 13 14 15 16 17 18 19 21 22 24 27 28 31 32 33 34 35 37 38 41 42 43 44 45 46 47 48 49 51 53 54 55 61 62 63 64 65 66 67 68 69 71 73 74 75 77 79 81 82 83 84 85 86 87 88 89 91 92 93 94 95 96 97 98 99'.split(' '));
 function phoneDigits(value){let d=String(value).replace(/\D/g,'');if(d.startsWith('55')&&(d.length===12||d.length===13))d=d.slice(2);return d;}
 function validPhone(value){const d=phoneDigits(value);if(!areaCodes.has(d.slice(0,2))||/^(\d)\1+$/.test(d.slice(2)))return false;return d.length===11?/^\d{2}9\d{8}$/.test(d):d.length===10&&/^\d{2}[2-5]\d{7}$/.test(d);}
 function validEmail(value){const s=String(value).trim();if(s.length>254||s.includes('..'))return false;const [local,domain,...extra]=s.split('@');return !extra.length&&!!local&&local.length<=64&&!local.startsWith('.')&&!local.endsWith('.')&&/^[^\s@<>]+$/.test(local)&&!!domain&&domain.split('.').length>=2&&domain.split('.').every(p=>/^[a-z\d](?:[a-z\d-]*[a-z\d])?$/i.test(p))&&/^[a-z]{2,}$/i.test(domain.split('.').at(-1));}
 const api={phoneDigits,validPhone,validEmail};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.QuoteValidation=api;
})(typeof window!=='undefined'?window:globalThis);
