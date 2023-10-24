import './style/loading.css';

const Loading = () => {
    return (
        <div class="loader">
            <svg width="260" height="76" viewBox="0 0 260 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="car">
                    <g id="group-3">
                        <path id="Vector" d="M76.109 0.453762C74.2623 0.974075 74.3494 0.904703 74.2274 2.37892C74.1578 3.10736 74.0706 3.76642 74.0184 3.85314C73.9139 4.02658 69.7326 5.67423 63.7395 7.91158C55.9345 10.808 45.4117 15.1092 43.3036 16.2886C41.9447 17.0344 39.9412 17.8669 38.9481 18.0924C38.5474 18.1791 37.2408 18.3352 36.0735 18.4219C34.9063 18.526 33.1641 18.7514 32.2059 18.9422C29.5229 19.4799 26.2824 19.792 22.3974 19.9308L18.8607 20.0349L18.1116 21.1795C17.0837 22.7578 17.0663 22.8272 17.6586 23.4342C18.3032 24.076 18.3206 24.5616 17.7109 26.0358C17.2753 27.1111 17.2405 27.3886 17.1708 30.4758L17.1011 33.7711L16.4391 34.3261C14.8537 35.6789 14.122 37.951 14.1046 41.5758C14.1046 44.9405 14.2962 48.4439 14.5575 49.9355C14.784 51.1669 14.8014 51.2189 15.8119 52.0514C17.014 53.0574 18.0767 54.2888 18.5646 55.2427C19.6796 57.428 27.8678 58.9022 42.6764 59.5786L44.2792 59.648L44.1747 57.5841C44.0702 55.1213 44.3141 53.1441 45.0284 50.9414C46.9796 44.8364 51.8926 40.1536 58.1993 38.4192C59.7673 37.9683 60.1506 37.9336 63.0426 37.9336C65.9172 37.9336 66.3179 37.9683 67.8859 38.4019C71.3877 39.3731 74.1752 41.0381 76.6665 43.6397C79.1056 46.1545 80.5342 48.7214 81.4401 52.1728C81.806 53.543 81.8582 54.0633 81.8408 57.0117C81.8234 59.2144 81.7363 60.7233 81.5621 61.5731L81.3007 62.8392L133.671 62.7178C162.469 62.6485 186.058 62.5791 186.093 62.5617C186.111 62.5444 185.954 61.92 185.745 61.1569C185.414 59.9949 185.362 59.3358 185.362 56.6649C185.344 53.7858 185.379 53.4216 185.832 51.826C187.87 44.5242 193.968 39.061 201.25 38.003C203.324 37.7081 206.912 37.8816 208.777 38.3672C212.94 39.4599 216.669 41.9227 219.247 45.2874C220.467 46.883 221.93 49.9181 222.47 51.982C222.888 53.5083 222.941 54.046 222.941 56.4914C222.958 58.5033 222.871 59.6306 222.662 60.5499C222.488 61.261 222.383 61.8506 222.401 61.868C222.435 61.8853 223.481 61.8333 224.718 61.7639C229.352 61.4864 232.697 60.9835 233.864 60.3938C234.7 59.9775 235.554 58.9889 236.077 57.8616L236.495 56.9597L236.216 54.2367C235.955 51.6005 235.955 51.4097 236.286 49.3111C237.383 42.5817 237.157 37.5174 235.676 35.4014C233.341 32.0541 226.512 29.5739 210.78 26.4C197.94 23.8158 187.748 22.7752 175.361 22.7578C171.389 22.7578 171.424 22.7578 169.316 21.2836C166.058 19.0116 151.11 10.756 143.688 7.14845C137.016 3.90517 129.96 2.27486 118.618 1.39033C114.995 1.09548 99.3498 1.11283 94.2278 1.39033C92.1197 1.51173 88.7573 1.71986 86.7364 1.85861C81.4749 2.24017 81.7537 2.24017 80.7955 1.68517C78.3564 0.280325 77.5376 0.0548558 76.109 0.453762ZM108.949 6.22923C109.054 6.87095 109.611 10.357 110.186 13.9645C110.744 17.5894 111.336 21.2836 111.493 22.1855C111.65 23.0874 111.754 23.8505 111.719 23.8678C111.528 24.0239 82.1196 23.3649 77.7292 23.1047C74.1403 22.8792 70.4643 22.4803 69.2796 22.1681C67.5723 21.7172 65.8301 20.1042 64.9416 18.1617C64.3318 16.861 64.3144 15.1786 64.8545 13.7391C65.1506 12.9586 65.3771 12.6811 66.0392 12.2475C67.4852 11.311 68.3911 10.86 70.4469 10.0449C76.3878 7.68611 85.3949 6.0558 95.8828 5.41408C100.569 5.13658 100.587 5.13658 104.785 5.10189L108.74 5.0672L108.949 6.22923ZM119.925 5.41408C124.524 5.72627 133.462 7.32189 137.852 8.64001C141.093 9.61126 145.605 11.9006 151.023 15.352C154.699 17.6761 155.797 18.4913 155.379 18.5606C154.072 18.7688 153.061 19.4278 152.556 20.3991C152.225 21.0061 152.19 22.7578 152.487 23.5036L152.678 23.9719L136.877 23.9372L121.092 23.8852L120.064 21.1102C118.148 15.8724 114.873 5.88236 114.873 5.22329C114.873 5.11923 116.528 5.18861 119.925 5.41408Z" fill="black"></path>
                    </g>
                    <g id="wheel-1">
                        <path id="Vector_2" d="M59.8718 39.1309C55.9867 39.8247 52.7288 41.5764 49.9762 44.4381C47.6765 46.8316 46.2653 49.3464 45.4117 52.5377C45.0284 53.9772 44.9587 54.6016 44.9587 56.8216C44.9413 59.7527 45.1329 60.9147 46.0911 63.4469C47.6068 67.436 50.8124 71.0088 54.6801 73.0033C56.161 73.7664 57.7812 74.3561 59.4014 74.703C61.2656 75.1019 64.8371 75.1019 66.7012 74.6856C73.5306 73.2288 78.8791 68.1817 80.6735 61.487C81.0742 59.9955 81.1265 59.4058 81.1439 57.0817C81.1613 54.3414 81.0568 53.6303 80.3425 51.3583C78.6352 45.9817 74.1578 41.5244 68.7047 39.7553C66.0914 38.8881 62.5374 38.6453 59.8718 39.1309ZM65.9695 44.3514C70.3075 45.3227 73.9313 48.6353 75.4296 53.006C75.8651 54.2547 75.9174 54.6536 75.9174 56.8216C75.9348 59.4752 75.656 60.776 74.6281 62.8052C72.9905 66.0311 69.6978 68.65 66.1785 69.4999C64.506 69.9161 61.5095 69.9161 59.9067 69.4999C54.3317 68.043 50.4292 63.3428 50.1156 57.6888C49.7671 51.4624 53.7567 46.0164 59.837 44.4208C61.4746 44.0045 64.2447 43.9699 65.9695 44.3514Z" fill="black"></path>
                        <path id="Vector_3" d="M64.8719 48.9128C64.8719 51.3236 64.9067 51.7225 65.1506 51.8266C65.3423 51.896 66.0217 51.341 67.4155 49.9535L69.419 47.9763L68.9312 47.5947C68.3388 47.1091 66.527 46.3807 65.5688 46.2246L64.8719 46.1032V48.9128Z" fill="black"></path>
                        <path id="Vector_4" d="M53.7567 50.8727C53.2689 51.4971 52.1539 54.1853 52.1539 54.775C52.1539 54.9485 52.7463 55.0005 55.0285 55.0005C57.6592 55.0005 57.9031 54.9831 57.9031 54.6883C57.9031 54.4281 54.3142 50.6646 54.0529 50.6646C53.9832 50.6646 53.8613 50.7686 53.7567 50.8727Z" fill="black"></path>
                        <path id="Vector_5" d="M70.1333 52.555C69.0532 53.5783 68.1821 54.5496 68.1821 54.7056C68.1821 54.9658 68.4782 55.0005 71.0567 55.0005C73.3389 55.0005 73.9313 54.9485 73.9313 54.775C73.9313 54.0813 72.7292 51.2196 72.2762 50.838C72.1543 50.7339 71.44 51.3063 70.1333 52.555Z" fill="black"></path>
                        <path id="Vector_6" d="M62.4503 52.8846C62.2412 53.2661 62.6419 53.9599 63.0426 53.9599C63.182 53.9599 63.4085 53.7865 63.5478 53.5783C63.8963 53.0927 63.6175 52.5724 63.0426 52.5724C62.8161 52.5724 62.5374 52.7111 62.4503 52.8846Z" fill="black"></path>
                        <path id="Vector_7" d="M61.8927 55.8503C61.3352 56.4227 61.2481 57.0124 61.6488 57.7581C62.1541 58.7467 63.4607 58.8681 64.2795 58.001C65.2029 57.0124 64.4363 55.3474 63.0426 55.3474C62.5722 55.3474 62.276 55.4861 61.8927 55.8503Z" fill="black"></path>
                        <path id="Vector_8" d="M58.7742 56.4747C58.3213 57.0297 59.0007 57.8796 59.6105 57.498C60.0286 57.2205 60.0809 56.7175 59.715 56.44C59.3143 56.1452 59.0356 56.1625 58.7742 56.4747Z" fill="black"></path>
                        <path id="Vector_9" d="M66.3702 56.4921C66.0217 56.8216 66.0217 57.1511 66.3353 57.4286C66.736 57.7582 67.3981 57.5674 67.4503 57.1165C67.5723 56.3533 66.8928 55.9544 66.3702 56.4921Z" fill="black"></path>
                        <path id="Vector_10" d="M52.1539 59.0763C52.1539 59.5792 52.8682 61.5044 53.4083 62.4409L53.9484 63.3602L55.9867 61.3309C57.2237 60.0995 58.0077 59.1977 57.9554 59.0589C57.8857 58.8681 57.2585 58.8161 55.0111 58.8161C52.5546 58.8161 52.1539 58.8508 52.1539 59.0763Z" fill="black"></path>
                        <path id="Vector_11" d="M68.1821 59.1283C68.1821 59.2844 69.0706 60.3077 70.1682 61.4003L72.1543 63.3775L72.6943 62.4409C73.217 61.5564 73.9313 59.5792 73.9313 59.0589C73.9313 58.8681 73.3912 58.8161 71.0567 58.8161C68.426 58.8161 68.1821 58.8334 68.1821 59.1283Z" fill="black"></path>
                        <path id="Vector_12" d="M62.4329 60.3597C62.3109 60.6199 62.3458 60.776 62.5722 61.0708C63.1297 61.7646 64.0531 61.1402 63.6524 60.3597C63.4085 59.9261 62.6768 59.9261 62.4329 60.3597Z" fill="black"></path>
                        <path id="Vector_13" d="M58.6348 63.8979C57.5721 64.9732 56.6836 65.8924 56.6836 65.9618C56.6836 66.274 60.3073 67.8349 61.0216 67.8349C61.1436 67.8349 61.2133 66.8983 61.2133 64.9905C61.2133 62.5624 61.1784 62.1288 60.9345 62.0421C60.7777 61.9901 60.6558 61.938 60.6384 61.938C60.6209 61.938 59.715 62.8226 58.6348 63.8979Z" fill="black"></path>
                        <path id="Vector_14" d="M65.0984 62.0594C64.837 62.1635 64.7673 67.8349 65.0287 67.8349C65.8301 67.8349 69.4016 66.3086 69.4016 65.9618C69.4016 65.8057 65.5165 61.938 65.3945 61.9554C65.3423 61.9554 65.2029 62.0074 65.0984 62.0594Z" fill="black"></path>
                        <path id="Vector_15" d="M59.2969 46.5541C58.6697 46.7796 57.816 47.1785 57.3979 47.4386L56.6313 47.9243L58.6523 49.9188C60.0635 51.341 60.7429 51.896 60.9346 51.8266C61.1785 51.7225 61.2133 51.3236 61.2133 48.9302C61.2133 45.7043 61.3178 45.843 59.2969 46.5541Z" fill="black"></path>
                    </g>
                    <g id="wheel-2">
                        <path id="Vector_16" d="M200.914 39.2469C197.029 39.9406 193.771 41.6923 191.019 44.554C188.719 46.9475 187.308 49.4623 186.454 52.6536C186.071 54.0931 186.001 54.7175 186.001 56.9375C185.984 59.8686 186.175 61.0306 187.133 63.5628C188.649 67.5519 191.855 71.1247 195.722 73.1192C197.203 73.8823 198.824 74.472 200.444 74.8189C202.308 75.2178 205.879 75.2178 207.744 74.8015C214.573 73.3447 219.921 68.2976 221.716 61.603C222.117 60.1114 222.169 59.5217 222.186 57.1976C222.204 54.4573 222.099 53.7462 221.385 51.4742C219.678 46.0976 215.2 41.6403 209.747 39.8712C207.134 39.004 203.58 38.7612 200.914 39.2469ZM207.012 44.4673C211.35 45.4386 214.974 48.7512 216.472 53.1219C216.907 54.3706 216.96 54.7695 216.96 56.9375C216.977 59.5911 216.698 60.8919 215.671 62.9211C214.033 66.147 210.74 68.7659 207.221 69.6158C205.548 70.032 202.552 70.032 200.949 69.6158C195.374 68.1589 191.472 63.4587 191.158 57.8047C190.809 51.5783 194.799 46.1323 200.879 44.5367C202.517 44.1204 205.287 44.0858 207.012 44.4673Z" fill="black"></path>
                        <path id="Vector_17" d="M205.914 49.0287C205.914 51.4395 205.949 51.8384 206.193 51.9425C206.385 52.0119 207.064 51.4569 208.458 50.0694L210.461 48.0922L209.974 47.7106C209.381 47.225 207.569 46.4966 206.611 46.3405L205.914 46.2191V49.0287Z" fill="black"></path>
                        <path id="Vector_18" d="M194.799 50.9886C194.311 51.613 193.196 54.3012 193.196 54.8909C193.196 55.0644 193.789 55.1164 196.071 55.1164C198.702 55.1164 198.946 55.0991 198.946 54.8042C198.946 54.5441 195.357 50.7805 195.095 50.7805C195.026 50.7805 194.904 50.8845 194.799 50.9886Z" fill="black"></path>
                        <path id="Vector_19" d="M211.176 52.6709C210.096 53.6942 209.224 54.6655 209.224 54.8216C209.224 55.0817 209.521 55.1164 212.099 55.1164C214.381 55.1164 214.974 55.0644 214.974 54.8909C214.974 54.1972 213.772 51.3355 213.319 50.9539C213.197 50.8498 212.482 51.4222 211.176 52.6709Z" fill="black"></path>
                        <path id="Vector_20" d="M203.493 53.0005C203.284 53.3821 203.684 54.0758 204.085 54.0758C204.224 54.0758 204.451 53.9024 204.59 53.6942C204.939 53.2086 204.66 52.6883 204.085 52.6883C203.858 52.6883 203.58 52.8271 203.493 53.0005Z" fill="black"></path>
                        <path id="Vector_21" d="M202.935 55.9662C202.378 56.5386 202.29 57.1283 202.691 57.874C203.196 58.8626 204.503 58.984 205.322 58.1169C206.245 57.1283 205.479 55.4633 204.085 55.4633C203.615 55.4633 203.318 55.602 202.935 55.9662Z" fill="black"></path>
                        <path id="Vector_22" d="M199.817 56.5906C199.364 57.1456 200.043 57.9955 200.653 57.6139C201.071 57.3364 201.123 56.8335 200.757 56.556C200.357 56.2611 200.078 56.2785 199.817 56.5906Z" fill="black"></path>
                        <path id="Vector_23" d="M207.413 56.608C207.064 56.9375 207.064 57.267 207.378 57.5445C207.778 57.8741 208.44 57.6833 208.493 57.2324C208.615 56.4692 207.935 56.0703 207.413 56.608Z" fill="black"></path>
                        <path id="Vector_24" d="M193.196 59.1922C193.196 59.6951 193.911 61.6203 194.451 62.5569L194.991 63.4761L197.029 61.4469C198.266 60.2154 199.05 59.3136 198.998 59.1748C198.928 58.984 198.301 58.932 196.053 58.932C193.597 58.932 193.196 58.9667 193.196 59.1922Z" fill="black"></path>
                        <path id="Vector_25" d="M209.224 59.2442C209.224 59.4003 210.113 60.4236 211.211 61.5162L213.197 63.4934L213.737 62.5568C214.259 61.6723 214.974 59.6951 214.974 59.1748C214.974 58.984 214.434 58.932 212.099 58.932C209.468 58.932 209.224 58.9493 209.224 59.2442Z" fill="black"></path>
                        <path id="Vector_26" d="M203.475 60.4756C203.353 60.7358 203.388 60.8919 203.615 61.1867C204.172 61.8805 205.095 61.2561 204.695 60.4756C204.451 60.042 203.719 60.042 203.475 60.4756Z" fill="black"></path>
                        <path id="Vector_27" d="M199.677 64.0138C198.614 65.0891 197.726 66.0083 197.726 66.0777C197.726 66.3899 201.35 67.9508 202.064 67.9508C202.186 67.9508 202.256 67.0142 202.256 65.1064C202.256 62.6783 202.221 62.2447 201.977 62.158C201.82 62.106 201.698 62.0539 201.681 62.0539C201.663 62.0539 200.757 62.9385 199.677 64.0138Z" fill="black"></path>
                        <path id="Vector_28" d="M206.141 62.1753C205.879 62.2794 205.81 67.9508 206.071 67.9508C206.872 67.9508 210.444 66.4246 210.444 66.0777C210.444 65.9216 206.559 62.0539 206.437 62.0713C206.385 62.0713 206.245 62.1233 206.141 62.1753Z" fill="black"></path>
                        <path id="Vector_29" d="M200.339 46.67C199.712 46.8955 198.858 47.2944 198.44 47.5545L197.674 48.0402L199.695 50.0347C201.106 51.4569 201.785 52.0119 201.977 51.9425C202.221 51.8384 202.256 51.4395 202.256 49.0461C202.256 45.8202 202.36 45.9589 200.339 46.67Z" fill="black"></path>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Loading