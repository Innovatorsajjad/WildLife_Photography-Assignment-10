import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRUYGBgYGBgYGBgYGBgYGBgZGBgaGhgYGBgcIS4lHB4rIRgYJjgnKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKMBNgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQYBB//EADgQAAIBAwMCAwYDBwUBAQAAAAECAAMRIQQSMQVBUWFxEyKBkaHwMkLRBhQVUrHB4SNicpLxggf/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAlEQACAgICAgICAwEAAAAAAAAAAQIRAyESMRNBBFEiYTJxgRT/2gAMAwEAAhEDEQA/AOrdYlqOcRqq8TrPnE5JSVE+xdmzA1Wl3GYvUmVDZ5tvLJQl6SRumkY0BWlCKkMyyCNAFoLGQIvSaMBpSAqwlDDEQZWZzQz1TKsZYCeNMqEAcQIWMMsiJAR4qSriM7YvWEpAzL10yFGZp668ToUSTNo6RJdFlwI0lCUqU4JhRWi+ZsUASJjUUzOg0QAEl7dDQxRFo5TixcT2lUldAxwoIAixhA8G7Qk1Q0eh57UMoDPWcTJqxgaiylNZKjecEjyGqKUW+hu9hE67wm42gXQyXO9FeNkR5ZGlQlp4Y4/szlFoOWgbwJeXonMW1IhPYxTeeQZkm3Jlij1LzxEvKiHprFEQKokRdczTqiIsuZTAvSWNIIGisYAk2VRCJLSWllWUpCKCFRpPZyypBsRdDLWniCWMmxlbTzbLCWtJY0D2yyJCBZbbEgBlYtVWONF3EtCZl1qN5ahpbRpkhkWNsmgPscRatTmnAPTvKQzMRLGaWnEH7GNUKcT7EgjLKBswrIZVUkybKLq5hFEGoh1aOH7KKtxFHeFr6gA2mRqdYM28ZGScU9G2P48pu/Qy1SF01Mk/feZele7WP35ffhNmhqkTF+5H1vM4pyezqcIwVI0aWlFs8z19OPCSj1BLc38LffrDDUq3BnasUKOZuVilTTeHyGYrUonwmqx8LQDqZEsaE9oxmoEGFRIeuLQVFphKlo55RSej32ck9DSRcybEhTllWGLCDczVqhFXaKMMyztKqcxWUN6dI17OC00cAjSKsB7OXSnCGVDQERlgzLO8AzxNksuGlg0X3y6tJTBMOJcCDQwwjLRBPGaVdrShMkGesYMwgWQpKECtPQsjCQGAi4SeMs8DzxnjUqBktLJBlpFeFkjYkIgleQvKtUUes1opqNZ71h4G/wBYr1XWhSEBycn0zYTNpuST6TnnJ3SPR+P8ZVzkHbUEkn1i1V7X8jf1sYM1IjqNXnmTGD7Z2NpaRYdR2Hd3GPH4xf8AizFrng8eUzdQxJtf79J5p0BOT+k6IpUZS7s6/Qav3c3F+PW5vc+hj9DUEd/lmcvpqxUhTx44sfjN/Sj3b/fniL8npGWRxirNnT6pvGMDUg9/rxMmn7wvDohtj5XhJyj2YrJGQ273ETL2MuxtE2e7TGTcjmzNehsPJKhZIcTHiDRyYfZiLU+ZoIBadCVgZmoWARsx/VpM9UzBKijS07xv2kSoCGMKYBHrQRrQLkwO6S0A01SUZpRJZhJYMruhEaDMuskSQyhh90VRpZ6tgT4An5RplJCzanc5zgY8vnG0zmYenB3qhI3EbiLm9j3Pb+83ytlBkq+R3fIhFQVej1Ze0GhhlE2RwAmWDMYZYuwgwPJUywl0S8VWJgDIoj66Qntb1xKPpQOWHoJSi1tlxxyl0gAMR13UAg8TGqjrwL+s5jrdI52XPqP6mZylekduD4q5XMQfWbmZmOSc3/tCfvgubG9uQB4+E5t6xU2cH7849TqMbG+PoD554jUK2drlekaNSpa/hbntEHtwQR58S7Ak+uD/AFg2pMDnI7Hv9/pKWiJbZ6i+e4fWael0IcXz6jJB9JTSaPflRnynSdP0+3J5mcpUZZZqKENP05xhxuXzGfWNvp9gsOJpu8FWW4zFHJs45ZHJbBaN9gjtNxzM4vYSj6qwlZm5Ujm5cWOamtM0VRvGeSAPMngDxMxa/XHditFbgYaq34B/xAN3+gkb9oGC7V09NjY3ZvaIg3CxXczEubEAkBBYm3M3x4G1+Wgpy2zsNPWBVWs5DC4KqLWvYXuRza48RJPnGv6zq3AWpUSwJI/06ffIALXwASBa2Ob8yTbwwXovifRETiNpgTH1lOrT4sRCqKpUGcTckaeNUaNVbiKmlmO6TQOyXY2PhFlVt+2axUvaJ4lkW3M9rMFFzD6jp7ngiB1OjYJ70qSkvQ1FAjqEAuTPECsLgxPVdLLgBGIPlFk6VqEIG4WmajJ7RdRo10TsIwmjbvxEdEr7wDOhNJithYS443JN0ZSjTM7UaQASDR+7e8u+mYfiN57SQ8Xi8bvoaiInwmZ1TUkoyL390kcgHnHxE0usVghCi+BckY7cX++Zk9G1vtKId9P7KoG2ndcB73uQCSSB7ov3JPhJUe/0bwxpU336C6Smd6sAAAgZiQbnBUc+n0M6jQWdLG3GPCZhcFLYUj3TwQRyGse4Ab5mH0z7QFQgcdr38rxX+aro3kuUWmO/w5u1j8RLro3HaVTVMuCD/wBgPW1z5T396bsdvkw3D5q33ebriczwIJ+4ue31Eo3Tj3YD6yGufEH0J+WLW+MX/fLmx+Pj8uYpcfoI4EG/dUXJN/oJQ6oDCWHnb+8G1dTyR/aZ9fUL+X6f5mcnXRvHHFehqrrLXzx58fSZ9XVEm9/nA1HHmfD74ilWoQb4x5/f2ZDt9mipD6ux4AAgq5BwR4/fjER1EHF4VNQr4vY+f9MTJmsUYHWejhhdMfU/fzmFpqFWmSALr4G//s756WL5I++0i6JDk8+k0jkpUDSu7OPp1Ce1j3HY4zOp0elV6d2FiB3wfj+sO2gX+UQabVbbxftE5omcXJaewWmqohIWUqdWKtbtNCj0Uu3usLHvF+t/s8KKh3cXY2HmebKBknBwJpCKmrRw5LT/AC7GKGqBAa8vrdeirdmCjAufE8AeJ8pzdTeqK6uhpm/vFmDYuLbdthkWNyLX4Mx+qakWVi4Y2ttRiTf8w2kWGDa7EcjEuPx3ezE6T96qPcoqKm25dy29TzY0gL+XIOb27HFOuVrBqoqBkYuCNiIpxcIDwBzv3E9gIjparsAxao2/BVauxBzcHaeOfI9x4J6l1UszhRkYFsAEgqhXI+d/OdShGPSFxRq1NZTUn2TBVYFchdzXNvc3g3A8wbkj4pa7bsLI5K3wrIQQCBkk838iPSZdSptZWFlsbg2D2IGLq2L+fMF/EHViyEZuCCL3vi5+/nKoGErVHZVIYA9x+YW4JsbZ5t6T2Zz6gkyR0B9sqO7cmMJq2UWx8oszQDvPMXL7Kch5OpsLgtBe3O7ffMyqj+cNQe8t8u7Fys1a3XtmXaw++II9WeodqqAvffe+OcD6XnJ/tPparOhRHdduQqk2a+L27Z/rF9HqKyXvRct3JpOfdv3sgt279ponKrs68cYuKvs7ujWVztVlRx+FSbbjiwAzeInVV3OTa2LW4nPr1Co7oopPlrEhHBuf9xnX6SjZQCLSG5ehZYxiTRU2DAk5myzsBgxRKUjMR4zSNxVHM2So795amHUbgoa2QpNt1u1+08bXMQdi2YC4CYZrZIJ5AsO2cTEp/tuylxUKtt3e4EcE7ScK+Qbj+YDMf+s0S1dmw9ZNQjKUKN+YYJVgOP8Aj/a0Ro9BNgVKKVIJ23AI8hbvmKp+1IdgwGwHAT3CByNzbbkC/Yn4Txus03IBfYwBDC4sxABDEg2seLTKTt7OmKpGkmiQEDcWN7qGtb3u6j9fCOoq2tweLEcWnLr1AKg/1N7Xa53Eqvf3RfPOPQQI64/5RdTyzGxJtn07eHMmDSdtFyi2tHS6tVJHZrixPB/2t+vIx6HPqaVN/uqyVStwpa6Pbwudt883B8Zn0/2gW1iQDcXxzn7+ULp+v7iUN3yCu1S2Df8ADYZtcf5mrafoztx9jWk14YlHDI4uLWKkHuM/2ltTqgFJbhbZ5BHj4/OZHUetDfza4AIYEFHBsceYtFn6kGDXDEFLPYEgDgP/ALT6WhxYnI126gDfOLfflEhrwDgt37A39LTnvbv+JbkDuASBAGub3AbJ7Keb9rRcGx+RG9V1ouNxPv8Ac8c8H77ylbqCDBvc9ybfK15lGlvABcAX3ZWodp4z7mDaE1HTlAudSoxY+6bEeOeDDh9k+VfQnqdXY3v9MfCXTrHFhfz8fWZXVdPsfalUODY3C4z2uCbxRg45x6hh9CI/Gmhr5FHcaPqtxY2+mR5DuZoJq1GAWvybkfSwnz5dSw/L8Re/wxHOnass6rUcovdvDzzIeIrzxZ3a9RDHamSeLc3t4zylQpUqytqK6q7qQiEH3muANlhi5xm17+s4up+0Do5TTgKm5R7UqfavY+8c3Cg3wLXsB6RzU0FZ0qpUNSpvVr1ARlSOSwAwQLfTtNI4L7Mnnd6Oo13VqVNq4Qmr+7sDWpbmR/Z2sz0zcXCm1/LMx9ZXqurNQ1DVdO6b09qispZmIakVORUXab+FgRbcJm09Dap7TlkYhnZ6QaorYYuPaEe+rbSL8YA7wXtgBtSgWcbrqpprTdU/C5RWO8hQt/y+WLjWGGMNkZM0pKg1Clp3NViAjoQzbiVG7dkZJBYgFe/aL1+opvum0pZjtIVzYfk5YAXvzf6iYOpdmc+7SX8QCq6Kq3seS3HhxzzLJp25FmJ7mtSOcHNmHnjPA+G1GFjX8VYA7X2H3rK1iuebKbqDjHge/jkVdWxYm5PPJvzz6X8rRgaFzckJjOKlPxAwA2B5f5mfm9/A8c48r4MQEase/wB+UpcsbKMnsJu9B6ANSW94oqbdxwzNuv8Ah4C8HxndaToGnQKFS1uWOWbHJJyZE80YuiW6Ob6V/wDn9SoWV6qDaFPuEsPeFxn08pJ3+l0S08pcXFjYkcSTL/oX0O0RhE6omgyxaqs50hsy6iwunO3mXcZlWMbYJGH+1BdmQruCANfabEG4sTbkcfOC6f0Xf+Me9gg7N2OR+W/2Zus4ByAw7g8GEo1KYPu708hZxfyBItKi7VHVjzRiqfYkeiruQKpZwwxtwT5kDj4zqNIWUBWtcXHN+DbnvA6bXbfwCxPLkWY/Inx8beULRiqicuVSpI0EczyofSVpy7CW2Yg61NHBUrtDABre8rAG9ipI/r2HhFT07TIj7jVZCDvQkbSDlgduWv538I8EnhO0gjtJbLU3VGNpen0XO9ENNT7wUqL5vZwwPPHb4y/8Jtb2aKLfiJ/ESRk3+WOJ71zqT2ZAtt2dwvwBlcdsTE6b1NqqBkf3VYKwBYWNiQCGzY2PrYyZK3a6OqMtKx3+HMVCuFvc2YefG/Fsi0GvQAe5xiy/hNr3t4f48o+mqcrcgNmx4XtcZ7/GOUtSbAWI8PL4/ZkRkrplSutGSvSkXFze48758Bx/7DUtKEbZ7Ry7HdsQsABm262B8bRzUFibLa2LkGxt4eQ88mLOlRroFRU72IZj5cYmlpdEU32K6nWOzlU1NQgALZXe1xySb+dojrqTEEuzPtHu7mLEk47nAm7R0hQWACnxN/8AEG9IcAc8m3Pnug5y9i4o5fTGugslV0XmyuwF+5sDmT+I6nj29THi5+ZzOhfS8kLn0iZoeNh/83vDyMPGmY1XqWpFv9epdjgBzew+xFdTrtTx+81vhUf+x4m0+mscAG3Hp4D77ylSiLG6j1GP6SvIxeOJyVcPfe1Ry177ixLX8b83lXZ3sWdmPF2YsfrNh9Pc+Xp/WGTp4NsZ++IPLQLDZjU9Kx/mMOnTH3ZPa9jx8Z0tDQhReMpRv2APkTn1k+Vl+FHKU+mAsCx2Dctza4xe82OtaR0eiigEOws6C9veUMT/ANgfSaz6ZSPh8Ip0t3o1WAZijLbaWJXtfHGYLO0R4Laoxdx9vVUqQKZqPUJN1VVvi/e9gB4mVXSe1T2i7xuZ/fvzcnAGLhcrfyM7CvpRVB9ooKM4d0U7N5AwGPJANvlMnqfS6p3OXRRtCKlFNxCIfcUDgKPHnk9zfXHnUuzPJiUfZw9fRtuY5O24J2kWPA3eEqgNrDHN+PIfrOoR3RW20CqubbiRuKgm91/FnxI8YjqTTL3Y7VINkIJJUjhQeD5j9ZvZz0YBcjH0t5/4ipSdAmi3L7rKAb2JuSfha4vnMy9RpdpN8DNvhGBTSa96TbkJXi4BIBtxf6/Odr0f9qkqEI/uNi1za5wLC5yZwj0bcwTJM544y7JcbPttGpcST5DoOt16VwlRgvgbFb+IB4PpJOZ/Gf2hUz6yakXq1ZWq0U35zEnaKaDsYB2lw8H3g0WVaWRIXZieoI0yJILQe00aLzMAjunaARNWiYcCJUXjaPHZYYLB1ZbdKVGkyYCOq0wcW4I4Mw69c00FIoFRDZVUHN+O5xk8WnR3inVdMtSm4IztJU9wQLj785KdGsJVpmdT1QZQijbZdw4GSbknvcbR85raCiXUXxgHFrfGc1pl/wBRL22gCxv5WtbxvOr0jWSwxDuS/o3b4xYwmlQfiZTbxF/pPClP+e3/ABuv1AilQwBaVyS6RzvLI0xTQ/nHxLf1MqdIOVIPxBMzC8Gzx8k/QLM0aNWmQOP1mfWp7sWzPE1brwxt4HI+RhBr1P41N/FTb6d4nG+jWOaPszqqEYK+vl6RSpSzN9fZvw49D7p/SLVtAb3GR2II/tJcWjSM4vozP3YEYkK7eLCMtRA8RFNXqFQHsfP9ZHZsgdWtbm1ouesKO4tMLqWvZsLj78IrR09/ec/ATVQVWzNzd0jpP4yvnbxmp0+kH98nHxz8xOTpoAewH1j7dTIGxMAfAk+clxXomUpVSZ15cdpBMHp2vsvvH/PpNvSagNJZxzg07JW0aPl0BNiL2zY4IvzOZ670d7e5d05Km5ZbcG35vXmdmREqxzLjOUWZWzg6PTXCF9qsigkMHKm3qBY/OZ5I97DECzZBBKX5z5mfRX6dSdi7INzDaXW6OQO29SDbA7zO13RSoNRCzlFuqHaGJHHvge+1rgbsnjdOiOaLdPQ7ODdbsueeN17W/wDnzxeDOiJubhVsbX7nwB+I+c3VZX3lbJa+9OxYc3sbg4sb/K8S1V2SwChbmyqBdb9jabDMNqWZI3qabCwHYccHx+IkjEfUKwxM6rNKrxMvVPacMBs9R4ROYjRqZj9KOSGNqJLT1RKPJsR4TDUmie6MUTGwRpUnjaPM+m0ZRpDZQ4Kko7waGWIisChaegyjiVLwQGGmms5H8psPQcTo9OfcETekCwbvHQ2IJU7OjLl5RSBVDFnaGqtE6jQZzkLzwwO6XVpSFRe0E8JeDcSrFQs4jOlVuxMoqR2gtpLdh0E2Ejn4znut6R++R4zp1MrVUMLEXElr2bQzyi97R82Gm8pZaVj3/Sbev0WxyBwcj0gxTveUp+mdvBNco9GSyH7/AKwNrHm/wmm9HmIOhHb4y07MpKmEp1cgnib/AE3VgWJNh53zOZLWMLTrscDHn/7BxsmW1R3qa5DjcLmVdszlNHqthxdm9MDznQaZywuYmjnnDjtDqNLO8UepaDbUEzJxdmLTBa7pdKowZls/86Ha9r8Ejket5m6vodHJG9Xt+NWW5t2K7Qp7G5ybEXzeay1YlqNQCbToxSktCTaZzGo6PWRVYOlUH+UObXvY3sb3A8rcWkm7TreQPqoNvIXGJJ0c0VZr1qmJj6x49qakyq7XnLFDaB0jmaenaZqJG6TWly2M1EMo7QCPPHeZ0FEvGqURVsxqk8bQGhSjiGIUX841TcTJgOoZdoFGl2eJDBVDFneErPEKtSNAOJUhvaTNSpCh5QUHZ4BxCLLbZAmKFZ6BGDTk9nKQIEoliJa0Gzxgz1VjFMxbfCJUibJY4rTx3gBVli0GxC2rpb7X7TJfTkEjym5KVKYOZElZ14M7h+L6Oe2xavS5M2H0uT6YmfUTx84oyaO64zVoxNRSPOYBLg2nRaXThiQe4+sr/Cs8TeMtHPKOxLTL4C82KNU25sPvEidOdVyvxHHHAjFHp7+H0P8AfmNoWn2DdyfSWCHm/wB+U0aOgtzPKyAeEh3YcYJaEghmfqDZppO4mTqmO7/E0gcebjejyieZ5PNP3ns0IoJqXPjEzzJJJRQZIVZJIDDU540kkQFBGac9kgwGqcYSSSZSAaSWaeSSAAVYk8kkpAWSMJJJBlB1hDJJAhnkkkkARR4pUkklIZQT2SST7F7LU40kkkTESQSSRDXQF4nqUFuO/wCkkkPR0YP5Cmm/FNejwD98CSSKPZ1zNKhkH4f0l/1Mkk7I9HHLsBqBmZmopi4/UySTKXZa6EqkS1XMkkqJzT/kC03eSSSaCP/Z" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;