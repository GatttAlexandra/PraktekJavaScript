// const tagihan = 100000;
// const tip =0.25;
// const nilaiTip = tagihan = tip;
// console.log(
//     `Tagihan sejumlah ${tagihan}, tip ${nilaiTip}, total bayar ${
//         tagihan = nilaiTip
//     }`
// )                                      Contoh tagihan dan Tips 


// const tagihan = 100000;
// const discount = 0.05;
// const nilaidiscount = tagihan = diskon;
// console.log(`Tagihan adalah Rp${tagihan}`);
// console.log(`Diskon adalah ${discount} yang berarti R`);



// const price = 50000;
// const lebihdari3 = function (count) {
//     let total = count * price;
//     let discount = total * 0.3;
//     return discount;
// };
// const kurangdari3 = function (count) {
//     let total = count * price;
//     let discount = total * 0.05;
//     return discount;
// };
// console.log('Diskon jika membeli lebih dari 3 baju: ', lebihdari3(4), ' Rupiah');
// console.log('Diskon jika membeli kurang dari 3 baju: ', kurangdari3(3), ' Rupiah');



// console.log('Diskon jika membeli lebih dari 3 baju: ', lebihdari3(4), ' Rupiah');
// console.log('Diskon jika membeli kurang dari 3 baju: ', kurangdari3(3), ' Rupiah');



const tagihan = 50000;
const discount = 0.35;
const discount2 = 0.05;
const belibaju =4;
const belibaju2 =1;

if(belibaju >= 3)
{
    
    console.log(`Diskon adalah ${discount} yang berarti Rp${(tagihan * discount)}`);
    
}else{
    console.log(`Diskon  adalah ${discount2} yang berarti Rp${(tagihan * discount2)}`);
}

