function recursiveFormatDuration (seconds) {
  if(seconds<60){
    return seconds+" detik";
  } if(seconds>=60&&seconds<3600){
    return (Math.floor(seconds/60)) + " menit " + recursiveFormatDuration(seconds%60);
  } if(seconds>=3600){
    return (Math.floor(seconds/3600)) + " jam " + recursiveFormatDuration(seconds%3600);
  }
}

console.log(recursiveFormatDuration(3660)); // 1 jam 1 menit 0 detik
console.log(recursiveFormatDuration(62)); // 1 menit 2 detik
console.log(recursiveFormatDuration(7324)); // 2 jam 2 menit 4 detik
console.log(recursiveFormatDuration(0)); // 0 detik
