import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The Lean Startup"
            price={15.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            
          />
           <Product
            title="Surface Studio from Microsoft"
            price={2500}
            rating={3}
            image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFhUWFxgbGBgYGBgXGxkZFxYXGBoYGBgaHiggGholHRsXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGzUlHyY1LS0tLzUvLy0tNS0tKy01LS0tLy0tLS8tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQGBwj/xABFEAABAwIDBAYGBgkEAgMBAAABAAIRAyEEEjEFQVFhBiJxgZGxBxMyocHwQlJykrLRCBQjM2JzgsLhU4Oi8URjFkOzFf/EABsBAQADAQEBAQAAAAAAAAAAAAABAwQFAgYH/8QALREAAgIBBAIBAgQHAQAAAAAAAAECEQMEEiExQVEiE5EjcYGxMlJhoeHw8RT/2gAMAwEAAhEDEQA/APcUREAREQBERAEREAREQBERAEREAREQBERAEREARFhr4pjPbe1v2nAeaAzIoLGdMtn0v3mNw7Tw9ayfAGVDYr0r7JZ/5Yd9hlR3k1Adsi8/wHpf2dWrsoMNaajg0ONOGydJvNzbRd+0zdAVREQBERAEREAREQBEXOdIunOAwT/V4nEBlSJyAOc6DoSGgwgOjRea4z027MZ7IxFT7NID8bmqHxXp6oD93g6rvtPY3ylAexIvBMX6ecSf3WEot+297/cMqiMT6adqO0OHZ9mkf7nlAfSSL5UxXpM2rUmca8fYaxkd7Wz71Hu2ttKvc18ZUBMT6ysRPDWO5SlfRDaXZ9bVsSxolz2tHMgeaicX0vwFL28Zh2/7rPIFfJpwlaoZLXvN7ukm1zqVZ/8Az3ggZYJ3b9SNNdQlMbl7PpzGelXZNPXFtcf4GVH/AIWkKIxXpu2a32RXf2U8v4iF8+UcC5znM0LZngMszJ3DmtU2/wC0oWj3TF+nukP3WCqO+3Uaz8IcofFenjEn93hKLftPe/yAXkd+IVuZQSei4v0zbVf7L6NP7NIH8ZcojE+knar/AGsbU/pFNn4Whcju1+fmFVrZ075IHx7fcgJXFdIsZV/eYuu6dxqvjwmFFvMmSZPE3PvVPWchPz89yZLTbd8668kABCZ1Z8/PvQhSDougdHPtHCt/9oP3QXfBfW9JsNA4AeS+XPRFhc+1KP8AA2o7/gWD3uX1MoAREQBERAEREAREQBfKnpNrGttfFxf9qGD+hrWR4j3r6qJXyfhpr4nGYgAuHrHOJFzFSq4xEjcPcO1ERJ0rZCjZr7dkmBIF4uVvYTZLCYdJPCcszYAGdZgd4UvgqYq1GsDicxyze1yA4wJDZA4za6kcT0arNpOr2gGRYtLhMF17zO7gOK9xg2UyyPojtlbBp1CB6sHcYmRcjN1tbiCOa2KmwA3DvdkGZlQtNrEETIMaTAldv0W6PuphtaqSHVKcGmfoumT4gDwW871YdUYRqcxkakRr7vBaoYYtGCeTLu7IXFbIAw+HpOG6iCBI62ZubS3HXktagx7qRpUaWQguIHCQCHOJtJBap+htanEGJbET3j81FYnbLc2QOAzXJ/ytcY0Y5Qt7ffJzlKmWkMgkNAJJm7ZnwJvzDBxUbs5wNatXjMWAmnN+s6QDJ0jXSJcui2ljw+WsMh8B0QN0COAAstGrXZhaJptZmfULe/LoOwKicOUbcTpSbXf+v7kDjKZo4drB7VZ3WIOgF8kzyEnmufrUHNMOE2nXlbf3xzC6TENIYatUHOGw1pBAE3iOO8zxAUHVoOcQRLi4SSRuFuz37wsmVc8GrA3Tv9fz/wAI0nN0+b8Y+Krkub8d07+WizBjgG9WzrAkHjx01srARJsd8n/O9UmkxZRuO7x99lUtOo+F+7eFcGQYOup3CI/zHJXP9qIvNp1HW0HNSSYQ3S/HQTGvmqeqMWMj4x5rK4SYvJ3/AJjcqNpgGTBgEwOEGJO68IDHv3fO9VeBAie+O0/BXCTa9zJMaiLWHf4q0jf2RwiJ8UB6X6BcNmx73/VpD/k8H+1fRq8I/R2w/wC1xNT+W0dwqE+bV7uoJCIiAIiIAiIgCIiA0Nv4r1WGr1fqUqjvusJXgfogw7fU1XuHt1Q0SAR1WNcRf7S9e9LGL9VsjGO40wwdtR7af9y8+9GWGDNnU3CznvqPvoetlHuaFbiXyKc/8FEpQ2fhKVYPbTFKo3NobODhFhu/ytTpHjy3LYFsgg7pEET2p0oo5mZ2zJ1HHu3LhqmMLhlLpG7yK2xUasqwp7trOyf0sDacvu7ORbcABccjJ96idsbcuHN+m2fGD5ha2xtjnEB7SYLQ0iIIMpgdiGochDhHLdr5wFYskUuCx6CU57vZGYjEOAmfbv3XHwKjMRiiNT2LqmbAqVAAZABjSIa28dpJKz47ZzGghrAamXUidBbXhaFDnu8lz0VS6ONwlWTJMfADVdBgKwa79ZqwQz2RPEREcdFD7L2PUrEOAyUm2NV2gi5P8R4AclhxpzFwDjkbpNiROvaq1JpGbPjT4NvaWLdi6wdeDbKNC6Z/K/JZMNsp+cgREdZxHVAG4ctLBW7FwhcQSYDdIgzxEcdF0RqsLQwuGQG4GromxP5L3HEnycrNqHB7F0cptRoiJLgBaARAuTybJUG9oJmCALiOff3k716U9tGocmRsN+iYJteTItJ3Lz/ar2mq6AIDjFuGo7dPkrHqIKL4N+jyynG2n+ZH1R1Y4k3m3LdPyFY6o3snW504XF7iVfEuOhO49ttVbkAIJMRYRv5yfD3Kg3FjS4Cd3jNiPDVWaAEW7D8VnZSBm5i1907pM2n4LCGTAFjqN154/OigkugEawQN98wJ3dl9VjLRJjTvt+aPJJ3dw1iBaOxDrr47lJJ7z+jzhow1Z/1qrvc1g/NevLzj0EYfLs1jo9pz3eNR48gF6OoAREQBERAEREAREQHm3p+xeTZeT/UrUx90l/8Aaud2BVfRwWFaB1fUsnWAXjNeNPaV/wCkhiTkwVAfTfVcf6WsYPxnwU5RNMsbTzNAa1rSCdQGxE7v8K3F7KMz6RD4pxqZGPOXP1s32TLgOcAHuXJ19h9eoIzOYetuBadHQL6790rvcdsqnVbBmG6EGLmw/wClXZOw6k0y+A5rXNd9IPZoJO7cVfb22TpZQ+rtIXovsKphy41gGlwbADp6okTP53UvtPaQYAIAOU95Bt881g6XYu7S03mOy4PhKgdqVnEUs0zk8ySPgqN1tWfZaTSRcYyfRIUNpF4kHQiY71G4twIcTvkdxt89qUIaIJ1Ft1tJK0qjS6pyBJ8vzWjHGivWOF/Dr2bQByZAAJbHAAXsI3rldq7Oc12TNmqGSQLhrQJF9LX7I5LqsLRqOd1WzcX3X3lSGPwAwTXGk01azxLncJ0gR7lGfKqpcs4b00XJSfCOb2ZtKnSYyiBLzZ0tnXfr2dwWDEOeCIa3NcA6ASdW/ms+zdnvec1Vrmkzme8RadAN8mZUnjKbAIY4ugCHHdbQce1bMLc4cnyWrjHFmaXJqVdk1KUEOLnvgxEAW6wLu+y5AbMJLi+RBvAnX5HiuwftIAtp57NM5hfNGolwB8lFbTxpqud6sazLpgm/DcsWoilLg7Gh3SxbpnK4inDiIIG6fjzWEgQTOkWkbp93NXY+gWOl1xNoMg8ROs/5WBrt0ePiCsrVMvtPlF7SIi2o5GZ57he6qxoEy3NZxHZoDPCeCt0gAkWBHPjvt/hUmADa+hN9I3aDv5ISUDJOoBJiNO8xoPyVtRseHGZ5jkrmNB1nkbxY3KtxBMknU34aiUB9T+inD5NmYYRH7Nh8Wh3xXXqJ6KYf1eEos+qxo+60N+CllBIREQBERAEREAREQHgfp5r+s2nhKI+hTafv1T8GKExWLc5wY0OZJsbgF3drv04re6c4zP0jeTcUQ0Cf4cPm/E5S+y/2peczQ0CH9UANEcdeNpWnA6TMmpjbT9EnsXEjKWh+ctsTfWx7fnkp920WNo69YNm2sgErh6dSlR9Y+l1oAE3vaBbTjZaNDa8mXOJM3kiCN+gsrpJSXJGgTjl3G4cSH1HO3HSZ0JkGE6QYtpE6FgbHAyNOy3vVThfXZSyAADfdGoHFRu0NnPa5rc8g37Ptdixy+Duj9Ax5o5IKUHzX/Sr64qZQzMXkQeG/T5ssmJwUG9Rrdxa3rHnJFlZg8CQ6KUkQ0F3AnVojgF1NPYVMayePO3NWwlOSs5ueWHCqk7fox7OxNOnRGRhc5xs0Em+/4rbpue6C8BnvlKBbTbla02MDSyV8cGgF9MkyYI4cQVEcHN2cXU6+PKj9yD6QYqscoYA4SQRInhdpPsntWoaoDQ0gZiLSZHD5nRSmJ2xh3OADRM7xeRqFzXSWm71gc2GsuQSIuRx3nUrdj/D4rg4GsjHULc3UkQb6by+SQOJvbsWam3I5zZ3kTeDz4wsb2OD8pII3EaaAkRu1E/4W1Uw9R4AbYDdznTjbTuVMopu0WrUOOPYyG2nggXZmkEZTYyIJETbW8+CsOCbLZn2WjhNuY0vaeIup+ts57GQ866ciZI1utXFMLWAwHPiwkaAa93DXRQ8a7K4Z5KoENidntDi0E62EAAyPnuVuIwRpiYIBHWBAIETG7Xn8VfUrOJbmvltbQz5CZWLEbSMOaLgyI3czfXiqHsNcXk4RHbgQb37oINlsbOpZ69JluvVptt/E8BYmjNuuYiwFgDNh823qW6EYbPtDCM/9zCf6Dn/tVJrPrTZzYpsHLzutlY6DYa0cAPJZFACIiAIiIAiIgCIsWJq5GOf9VpPgJQHzLWDsTtfG1G7qtW/ANfkBPc1dbsvAZ5qVX5mgg5ARllo1dxPf2rz7opj6ofWfT1qkAzEXLnXJHOd2i7elOHpk1agdUFgwHqgkC7txN9Fpw9GfUXVWR21sfJNMQGkyBpu/x71CGqM9rCfcsnrg5z6r726vM3ndw3W1WnRMgk7zO6bTbjxXpy5NOGKjGkdTsvbjaTYcLcgNBe079PELrcBFSgKzmgSSI3wbQvL3icgNpiSeZuu8r7QdRoCJcGxu3aadl1MfxLYnnnpqV9/sSWwK7S2o1oHVe7TgTI8BbuVmIxRLi0GdDru3dy5rYO0W021CSTmLjMXu7WLmL81rU9plzxTBEiBmBNxrBBG7TkrMbSMeo3Zm3X6nStxTXCHPgySIOvJbFRzarQWGSBoDcgb446LmOkmPpBrWM9r6caTcbt44RvWns7Hubv3C4jtF+C9JbnZlyt44JskdrYKG9VhBcAXHKJFpDQd2mupULVfUc2CSR9ESYEgxrvi3er9r7TdUJzSADuJjMZ61rcBfcsOzqsuPrATOo3d8eSsXKoom6ipeTVwFKSToZ00EaxHh4KeoUqhIc1oyg7hu4qzA4Ok5zsog6iCSLGVL4IlpLSQ7s7IhKpFLzXKyI6RY2ajXv0g+M3kcPfdc5XxQcwz9bwa7cPniuk6V0GwAQWkXB1gRpuj/ACuNx9ZuXquAgAWMExeSBvOnjxWXLJo2aeMZvc+zUaTlAaZmCCD7jBgEWMLVrG5FhuIjSDx4zMwqtsNR3aiRGnn2qsnNIh2mhI08DPvWQ6iRje4HWSbX8LGdN6670TYbPtSj/CHu/wCOX+5cxWplsuBdfqnMI1Hs6mbT3Bd76B8OXbRc7c2ifF1SnHuDlBKPpIIiISEREAREQBERAFAdPcWaWzsZUFiMPVjtLCB7yFPrhPTbivV7Irif3jqbPvVGk+4FAeAdH6hFMNAJBf7IJBcQAAJCkq9FzYF9fZgxM6AbwnRSjAY6CS0FwGsSbujs+CmdnYcuxDS7cZ0kWNvfC0Qi6RVPKkXV9mGnhqZf7RHsgXE3uuWoU+tBnVdp0j2k10hp0J5coXHBmtxa53WtpPMgRqoyPk2aaPx5JDFszNmdG6gWMb+8rodoVw7DTY5mCBwkRJ79y5/137MQLmbbgI4K7YVZzjkJmRbTmBZTjk1Z51eJOUW/BVuGLAypYkCwOhbwcOclaleqGuBaQDvym3dvXT9IMHlp0uIInv8A+lFbUwQgAC7tOA+ZU+SvelEji9r7ucZIJBNhE27bytrZ9MT1rA6W1uRbiFC0qhaY1AO+4njHYtqlVOp/Ls7OxX43ycrVPcmjrsPRpsnMZtrAIMb58Qov9WYHOLbt3HnOnbBFliw1ao4tAA8JnjPL81np0LFoJABMtkwOwdvPfyV6OY3SM2Cwed3UeGyYEy2d0x+a2HVCx9ieBMg6diyYKi0MFzM7+zT54qM2riSx5JjqgC5mRf3QFO5Lsr2OfRpdLw8hr3E5LiJ8THZF+S5LDNLiKbQXZgYa1pc7Ncae9dLtzGZ2OBABAEHk7XXdELk6YIMtJ0EFs2JvE8dfBc/UNOVo7mgUliqRWqQ0w0jdfW5AJvHagcBlc0gEE7r2i5m15PgqU6sEkWMROuoIPiFU0urmPs5om0TEwO5UG0scyIvumOW5ev8A6O+GmtianD1bfAPJ8wvIXO4CJ858tF7p+jrQ/YV38apH3WU/zKg9HsSIiAIiIAiIgCIiALyb9IvFRgsPTn28Rm7Qym/4uC9ZXhn6RWJzYjBUP4XuI+29rB5OQHK9HGZv2YkRTAkGLwCeW6O9Xuxrml2URIIN/ogzY9ytwxIq1CDa/gCdFhxzZAPHgugofE47zr6tGrXrh0cBqFqYx3Af9rZqUYAuJOgjW/ujXnC1SATrI+dAqXA6mLU8GdlU5B390i6rsLEhlYGQOt7+CZAWEX0K1G0AXBo42Ez/ANptaGTVKT5Oxx+0TVdl0DTP5fFUxrgWBoMG9+3fPCyi9mUwMx1AFt08FtY0zHLfxKsWPyc/NqVSSIvHUh6wwJFu8xEquDoyQCt2rTs12/d3bwrG0yD+SvUUjnSzOUaJWnDcpGUQ25jnO/UhXtIcS4669t1DuaZE7wtyjiMp7d/JSyhJ9WSLwGw6YsSRppxUPtTGUwPWuEmO2bRFr8jylanSHa8vFNo7SSAOtHuXOYraEjKJPEnf2clmyZvB09PpL5ZsjGtLXBw6pba0a2tx7VD6NjeSZBBEREE7uPZfir/W5iS8kyDEETOo1+jKx1qpcZNzvOpPMk6nmsspNnUx41C68lW5bHrT9K0xuEXvu4Kw9yC5ibeA4370c4m/G9re7cvJ7GWD837F9H+gbD5dnNd9Zzz4vcPJoXzg1fU/okw+TZeG502n7wzf3KD0dkiIgCIiAIiIAiIgC+dfTVW9ZtpjPqUqTffUqH8S+il8y9Kqvr9vYtwNmPc2+71bG0z758V6grkivNLbjk/6M3MFShl266RawtK1NoN60aBvH4qXad5gANho7rrndp4qHEAyT4nX4LptpI+bhcp8GliHE66SSB89gVKdIOcOtA4xoAN4HGPese0MSWsu3hHLieF/gs2zTmZc5dTJ4AE6qm03Rve5QsyCicoJ0nVYQ0B6ki2Q126Dppyju4qyjRBgu36qzaZ/q+zbwFIEeSy4uiCRBiJ+H5LPh2g6XtAndBIERyham1Hhlp3ea9voyRk3PgyYgdVoFyTbsVuOp5S06ZQJ7dwWGjV6hM6CFBYnbOd0O6pnfMTx7lXOaiX4sMsjdeDpmObBLgOR0WHHERmBMkCw+dFztfaMs6r9HAd0cPnRYcftNxyhpsG3iwPEeSrlmVGiGidomcRsv1svJAIBsN4AJsuRxVPK9zYiDEfPipbD7bdSGUNad+866iZ0UVisTmqOeBGaba6iCFmm01aOlghOLafXgsblIg6yOtNgN8iJO6/I2Vh147hGnb2Kh7Vc18TwO7y8Ne5Vmoo353I5hGtjw36ToqQrnmQDcnfPuju8kBSbFfYHQ/DerwdFg+ixo+60N+C+RsDRz1KbPrPYPvOAX2TsynlpMHJQSbSIiAIiIAiIgCIiAL5A29WrU8ZiXkPpvdWrEy2NapdvHYvr9WPotdq0HtAKENJqmfHjukWINjWkcwz8lr1NoVHGSQTyAHkvsCtsbDP9vD0XfapsPmFHVuhGzXa4DC91GmPIL1vl7PCw411FfY+TamJc6CYMCNPNblHbDmycjTw1AHYF9MVvRrsp2uCpDslvkVoV/RBsl3/jub9mrUHuzQinJeRLFBqmjwA9Iz6sM9XoInOfKFjo7bg3ae4/mvc6/oQ2a72XYln2ajT+JhWjV9A+D+jisSO31TvJgXv60/ZV/wCPD/L+55nhOllBrYNOpPHq/mtPaHSClUcTlIBaQJEmbEadnvXpOK9ArYPq8a+YsHU2mfAhcD/8Bf640PXgOExmYbxeBB1sbcRG9S882eFoMKdpf3NR+26eUZXH2R1crhfffTRc5XqZnFx1JJXpLfQnjnND6dfCvB/iqN/sK16voX2oNG0HdlX82heJZHLstxaeGK9p57Y69WG7hMu53tPFWueYAvFzHM2mPBdrX9FG12/+Lm+zVpHzcFo1vR7tRuuBrHsDXfhJXmy6jmLix5GFbBiYsZvuUzW6K49ntYLEj/Zf8AtOtsyu326FVv2qbx5hQKNOjGYWm4tMTfSVWBJvGsanumbdpVCRobdtlSRyQUUdqqtbJA3nnx8lUBIQEz0Nw+fHYVhv+2YfunN8F9eYdsMaOAHkvlf0V4bPtTDj6vrHHupuA95C+rAhIREQBERAEREAREQBERAEREAREQBERAF5l6S9jlj24mna8yNzhB8d/cV6ao/bmDbWovpOIEixMWcNCgOf6CbYFRgFodcD6rhGZo5aEci1dgvDtj49+DxJZlcWF2rQSGuBi8bt08wdy9W2b0nw9VgcX+rJ1bUGQggkb91vJATaLWp7Qou0qsPY5v5rO2oDoQe9AXKkKqIDFUwzHe0xp7QCo7HdG8JVa5r8PR6wIn1bJEjUGJBUsiA8w2L0Xwb2vo18JQdWoO9XUPq2gu3sfb6zYPipdnoz2TVb1sEwHQ5XVGfhcFudIqPqMVSxYsyp+xr9/wC6eew9XvU1g35XcjZARXR7oBgMFUNXD0cjyIkve+2sDO4wJv3BdOiIAiIgCIiAIiIAiIgCIiAIioSgKrn+kG061OoG0iwDKCcwJMknQg204KbfUI3LlelXriRUpUHVXWBaHNZ1bnMC7UzAjmgNSptnFn6Tf6SB5s+K062NxR1fW7nsH9wWg7atZn7zZ+MHNrKdQf8ACpPuVg6TUB7ba9P+Zh67PElke9AZqzqp9qpX787vwyFo16BOrvvBzfxBbdPpPgjb9aog8HPaw+DoUlQxlN12VGO+y9rvIoDnqOH4OYexwWz+rP8AqlTzmTqJ7RPmsP6nT/02dzQEBCOpuH0SqBxHEeK6TBYCm54BBjk948nKj8BSE9Se0ud+IlAQLcdUbpUeP6nD4rLT6R1hYYh33s3mpT9VpjSmwdjR+Sq58cvcgNan0oxY+k4/7U+8NWyzpbix/wDWHdrQ3zeFH4va1Bn7yvSZ9qoxvmVHVOk2EPs12v8A5eap+AFATG2eltZ9CoyphWuBadHwZ3ERmuDCmeiW1P1jDtcfbZDXzrIAIJ7QR3yvP8RtptQZadLEnNAkYeoALi5LgLKf6KUqtCpd9JzHznyl4M7nAOYNIjsKA9Mw9SWysq0sFWbl11W2HhAXIqSqoAiIgCIiAIiIAiIgCIiApCZQqogLDSHBY3YVp3BZ0QEbiNiUH+1SY7ta0+YURifR/s95k4SjPEMa0+IAXUogOKqejbCfQNan/Lr1me4PhYHej54/d7QxbftPbV//AEaT713iIDhGdEdoMINPaLTH+phmP/C5qO6G413t7ScP5VCkz8QcV3aIDhR6O2u/e4zGP/33MHhTyhZ6fo1wH0qRqfzHvqfjcV2aIDncJ0KwNP2MLRb2U2fkpOlsik3RjR2ABb6IDWGBZwCuGFbwWdEBjFBvBXBgVyICkKqIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID/9k="
            
          />
        </div>
        <div className="home__row">
        <Product
            title="MacBook Pro 15 - 2019"
            price={1500.99}
            rating={3}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_GB?wid=892&hei=820&&qlt=80&.v=1587513579261"
          />
        <Product
            title="Clean Code"
            price={20.00}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41-+g1a2Y1L.jpg"
            
          />
        <Product
            title="The Pragmatic Programmer"
            price={25.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg"
            
          />
        </div>
        <div className="home__row">
        <Product
            title="Samsung Odyssey Ultrawide Monitor "
            price={799.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SX466_.jpg"
            
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
