Competencies: Pseudocode

Buatlah Pseudocode untuk kasus berikut:
Sebuah perahu layar sedang melaju dengan kecepatan 30km/jam
Perahu tersebut dipengaruhi oleh kecepatan ombak yang berlawanan dengan arah lain

- Jika ombak dibawah 1 meter maka kecepatan tetap.
- Jika ombak setinggi 1 meter maka kecepatan akan berkurang sebesar 7km/jam
- Jika ombak setinggi 2 meter maka kecepatan akan berkurang sebesar 15km/jam
- Jika ombak lebih tinggi daripada 2 meter maka perahu akan terbalik, sehingga kecepatan menjadi 0km/jam

Tampilkan kecepatan perahu jika di depan ada ombak setinggi x meter

STORE `kecepatan perahu` with 30km/jam
STORE `ombak` with 1m
STORE `hasil` without value

IF `ombak` LESS THAN 2m
  CALCULATE `kecepatan perahu` minus 15km/jam
  SET `hasil` with CALCULATE RESULT
  DISPLAY `hasil`
ELSE IF `ombak` GREATER THAN 1m
  CALCULATE `kecepatan perahu` minus 7km/jam
  SET `hasil` with CALCULATE RESULT
  DISPLAY `hasil`
ELSE IF `ombak` LESS THAN 1m
  SET `hasil` with `kecepatan ombak`
  DISPLAY `hasil`
ENDIF  
