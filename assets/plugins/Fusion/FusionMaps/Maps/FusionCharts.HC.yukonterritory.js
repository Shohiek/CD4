/*
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @version fusioncharts/3.3.1-release.19520
 * @id fusionmaps.YukonTerritory.20.10-30-2012 07:55:32
 */
FusionCharts(["private","modules.renderer.js-yukonterritory",function(){var p=this,k=p.hcLib,n=k.chartAPI,h=k.moduleCmdQueue,a=k.injectModuleDependency,i="M",j="L",c="Z",f="Q",b="left",q="right",t="center",v="middle",o="top",m="bottom",s="maps",l=false&&!/fusioncharts\.com$/i.test(location.hostname),r=!!n.geo,d,e,u,g;
d=[{name:"YukonTerritory",revision:20,creditLabel:l,standaloneInit:true,baseWidth:506,baseHeight:740,baseScaleFactor:10,entities:{"CA.YT.NO":{outlines:[[i,3364,759,f,3353,752,3346,741,3345,739,3345,737,3344,736,3343,734,3339,730,3339,722,3339,721,3338,719,3335,704,3324,697,3315,690,3309,682,3307,680,3307,676,3307,655,3304,635,3304,634,3302,632,3299,628,3294,626,3289,624,3284,622,3279,620,3276,617,3271,613,3269,609,3265,599,3259,593,3254,588,3252,581,3252,580,3251,578,3247,571,3242,563,3242,562,3240,560,3233,555,3227,551,3227,505,3226,458,3226,457,3226,456,3224,447,3218,444,3216,443,3214,441,3209,437,3199,437,3188,438,3176,438,3176,434,3176,432,3176,429,3175,427,3174,425,3173,423,3169,415,3163,408,3161,407,3160,405,3160,403,3159,402,3158,389,3159,376,3160,362,3151,355,3150,355,3149,353,3149,346,3144,344,3143,343,3143,341,3142,339,3141,338,3135,330,3132,321,3132,319,3130,318,3123,312,3124,297,3125,284,3126,271,3126,263,3118,263,3116,263,3115,262,3104,260,3101,248,3101,247,3101,246,3099,239,3101,233,3101,227,3098,226,3097,225,3097,223,3096,222,3095,220,3091,218,3089,213,3086,205,3080,201,3079,200,3078,198,3076,195,3075,192,3074,189,3073,189,3071,187,3069,187,3061,187,3054,186,3053,186,3051,185,3046,183,3041,182,3039,182,3037,182,3037,181,3036,181,3036,180,3036,180,3036,176,3039,173,3042,169,3045,164,3046,162,3047,162,3053,160,3056,153,3057,151,3057,149,3057,145,3056,142,3056,141,3055,141,3049,137,3045,132,3043,130,3040,129,3033,124,3028,120,3027,120,3026,119,3022,119,3019,118,3014,116,3011,111,3010,108,3009,104,j,3008,104,f,3002,104,2996,104,2993,104,2989,104,2978,102,2974,109,2971,114,2966,115,2965,116,2963,116,2951,117,2944,110,2943,108,2941,106,2936,101,2931,101,2927,100,2918,100,2909,99,2901,98,2892,98,2886,88,2885,86,2882,85,2877,82,2876,75,2876,73,2875,72,2864,56,2851,44,2849,43,2847,41,2841,32,2832,27,2824,23,2817,17,2813,12,2803,13,2787,13,2772,14,j,2763,20,f,2763,20,2762,20,j,2497,549,f,1952,1626,1404,2695,1656,2936,1743,3204,1744,3206,1744,3209,1745,3211,1746,3214,1747,3222,1747,3232,1746,3244,1749,3254,1750,3256,1750,3257,1751,3261,1752,3265,1755,3283,1755,3303,1754,3328,1753,3352,1753,3353,1752,3354,1751,3362,1752,3370,1752,3374,1753,3379,j,1754,3379,1754,3380,1816,3513,f,1821,3510,1828,3509,1830,3509,1833,3508,1838,3507,1845,3503,1846,3502,1848,3501,2080,3375,2193,3112,2298,2818,2415,2731,2532,2643,2533,2643,2967,2492,3504,2789,3504,2789,3504,2790,3505,2789,3505,2789,3509,2784,3513,2779,3514,2778,3515,2777,3515,2776,3516,2775,3516,2774,3518,2773,3519,2772,3520,2770,3520,2768,3521,2766,3522,2762,3522,2757,3521,2753,3523,2749,3523,2745,3523,2740,3523,2733,3519,2730,3518,2730,3518,2729,3517,2728,3516,2727,3515,2726,3515,2724,3514,2722,3514,2720,3508,2711,3499,2706,3496,2704,3492,2704,3491,2704,3490,2703,3484,2700,3479,2697,3477,2696,3477,2695,3475,2685,3483,2682,3488,2680,3490,2673,3491,2670,3493,2668,3493,2668,3494,2667,3496,2663,3500,2661,3501,2660,3502,2659,3504,2657,3505,2656,3511,2651,3513,2644,3514,2643,3513,2641,3513,2636,3515,2634,3517,2632,3522,2632,3528,2630,3536,2631,3543,2631,3551,2630,3552,2630,3552,2628,3553,2623,3557,2622,3560,2622,3563,2620,3564,2620,3564,2619,3564,2610,3564,2601,3563,2590,3566,2583,3568,2579,3568,2574,3569,2574,3569,2573,3569,2572,3570,2571,3571,2570,3572,2570,3579,2570,3582,2567,3586,2563,3589,2560,3589,2559,3590,2559,3592,2558,3593,2554,3593,2529,3593,2504,3593,2501,3591,2501,3584,2496,3581,2490,3581,2488,3580,2487,3577,2482,3577,2474,3577,2466,3576,2460,3574,2453,3571,2448,3567,2443,3565,2439,3560,2435,3562,2428,3562,2424,3564,2422,3568,2418,3572,2414,3573,2414,3573,2413,3574,2412,3574,2412,3580,2406,3585,2402,3589,2399,3593,2396,j,3594,2395,f,3592,2390,3593,2384,3593,2353,3594,2324,3594,2313,3592,2304,3592,2304,3591,2303,3586,2300,3584,2294,3584,2293,3583,2293,3581,2291,3581,2286,3582,2279,3581,2271,3579,2266,3576,2263,3575,2262,3575,2261,3574,2255,3574,2248,3575,2243,3573,2241,j,3131,2057,f,3115,2051,3105,2051,3103,2020,3103,1990,3102,1985,3104,1983,3105,1982,3105,1981,3104,1977,3107,1977,3108,1977,3109,1976,3113,1973,3117,1966,3119,1963,3120,1962,3127,1955,3137,1949,3139,1948,3141,1946,3142,1944,3143,1944,3148,1943,3151,1939,3152,1938,3153,1937,3158,1934,3164,1934,3165,1934,3165,1933,3175,1925,3186,1918,3186,1917,3187,1915,3188,1915,3188,1914,3193,1910,3199,1906,3200,1905,3201,1905,3206,1904,3209,1899,3209,1898,3211,1897,3211,1897,3213,1896,3216,1892,3219,1889,3222,1887,3225,1884,3225,1882,3225,1881,3224,1868,3222,1856,3222,1854,3220,1852,3213,1844,3214,1830,3215,1810,3217,1792,3217,1791,3220,1792,3228,1794,3227,1786,3227,1778,3235,1777,3237,1777,3238,1777,3245,1777,3244,1768,3243,1761,3243,1755,3243,1748,3242,1740,3242,1739,3240,1738,3230,1735,3222,1731,3220,1730,3219,1729,3217,1727,3218,1725,3219,1719,3220,1715,3221,1713,3222,1712,3226,1709,3229,1702,3234,1699,3237,1697,3238,1696,3238,1694,3238,1671,3235,1648,3235,1648,3233,1647,3226,1643,3223,1634,3220,1624,3218,1621,3215,1617,3240,1572,j,3538,902,f,3535,902,3535,900,3536,897,3534,896,3534,895,3534,894,3533,888,3528,887,3526,887,3525,883,3524,877,3519,877,3512,877,3505,875,3503,874,3502,872,3501,870,3498,868,3498,868,3496,867,3493,866,3491,865,3485,864,3482,856,3453,855,3424,855,3427,840,3419,832,3416,828,3410,826,3408,825,3407,824,3400,817,3391,817,3387,816,3387,807,3387,798,3381,788,3375,777,3374,771,f,3372,765,3364,759,c]],label:"North Yukon",shortLabel:"NO",labelPosition:[249.9,176.3],labelAlignment:[t,v]},"CA.YT.ST":{outlines:[[i,3489,2810,f,3494,2798,3504,2791,j,3505,2790,f,2968,2493,2534,2644,2533,2644,2416,2732,2299,2819,2194,3113,2081,3376,1849,3502,1847,3503,1845,3504,1839,3508,1834,3509,1831,3510,1829,3510,1822,3511,1817,3514,j,1819,3519,f,2036,3834,1993,3962,1995,3964,1997,3968,1997,3970,1998,3970,1999,3972,2000,3974,2001,3975,2001,3975,2002,3977,2003,3981,2003,3982,2003,3982,2006,3988,2010,3993,2012,3996,2012,3999,2013,4000,2013,4000,2020,4001,2024,4006,2026,4008,2029,4010,2031,4011,2031,4013,2031,4016,2033,4018,2038,4024,2044,4028,2055,4035,2052,4051,2052,4053,2052,4053,2055,4055,2055,4060,2055,4065,2057,4068,2060,4072,2098,4149,2130,4316,2065,4483,2074,4483,2077,4488,2078,4489,2079,4489,2089,4493,2099,4499,2104,4502,2108,4505,2110,4507,2111,4509,2112,4510,2113,4511,2115,4514,2120,4516,2125,4518,2131,4522,2137,4526,2143,4530,2145,4531,2145,4531,2150,4534,2156,4538,2163,4541,2171,4541,2179,4540,2185,4542,2188,4543,2190,4542,2199,4541,2205,4546,2208,4548,2212,4548,2225,4549,2237,4548,2244,4552,2254,4552,2269,4551,2285,4551,2286,4551,2287,4550,2298,4544,2312,4543,2318,4543,2324,4542,2325,4542,2325,4541,2335,4534,2350,4532,2366,4531,2382,4531,2391,4532,2397,4528,2402,4526,2409,4525,2422,4524,2432,4526,2432,4527,2433,4527,2438,4531,2466,4532,j,2990,4722,f,2991,4722,2992,4723,3585,4949,3736,4860,3737,4849,3737,4838,3738,4839,3739,4838,3747,4839,3752,4842,3755,4844,3760,4844,3773,4842,3782,4847,3782,4848,3782,4849,3781,4856,3786,4857,3787,4858,3787,4857,3798,4861,3799,4851,3799,4849,3799,4846,3799,4844,3801,4844,3803,4845,3804,4844,3810,4843,3812,4836,3813,4836,3813,4835,3815,4833,3819,4831,3819,4832,3819,4830,3819,4818,3820,4805,3821,4805,3822,4805,3838,4805,3855,4804,3856,4804,3856,4803,3859,4796,3864,4791,3865,4789,3868,4789,3873,4790,3872,4784,3872,4776,3872,4767,3872,4751,3872,4736,3869,4735,3869,4734,3868,4734,3867,4734,3861,4734,3860,4729,3860,4724,3858,4722,3857,4722,3857,4720,3857,4714,3860,4711,3865,4706,3865,4697,3864,4682,3865,4667,3865,4662,3861,4660,3861,4659,3859,4659,3847,4661,3842,4655,3841,4655,3840,4654,3837,4652,3833,4651,3833,4651,3831,4650,3829,4650,3827,4649,3827,4649,3827,4648,3827,4634,3821,4623,3820,4620,3820,4616,3820,4605,3815,4599,3816,4598,3814,4598,3797,4598,3780,4599,3779,4599,3778,4599,3774,4599,3770,4602,3767,4604,3763,4605,3759,4605,3760,4600,3761,4592,3766,4586,3767,4585,3768,4585,3780,4585,3792,4586,3800,4589,3809,4588,3817,4589,3824,4586,3829,4585,3831,4580,3833,4576,3838,4577,j,3838,4575,f,3838,4562,3840,4549,3841,4549,3841,4547,3841,4538,3842,4529,3842,4522,3838,4517,3837,4516,3836,4515,3828,4506,3820,4496,3819,4496,3818,4495,3813,4490,3808,4488,3801,4486,3796,4481,3796,4481,3794,4480,3794,4480,3792,4478,3789,4472,3781,4470,3777,4469,3778,4463,3779,4459,3779,4455,3779,4434,3776,4414,3776,4414,3774,4414,3758,4414,3753,4401,3752,4399,3748,4400,3740,4403,3734,4405,3729,4406,3728,4404,3727,4400,3727,4396,3728,4384,3727,4369,3728,4363,3730,4357,3730,4356,3733,4356,3738,4356,3740,4352,3741,4351,3740,4349,3741,4339,3740,4330,3739,4322,3731,4323,3728,4324,3725,4323,3723,4323,3719,4324,3719,4295,3719,4266,3719,4260,3720,4253,3721,4253,3722,4254,3727,4255,3727,4251,3727,4248,3729,4247,3730,4247,3730,4246,3731,4246,3732,4246,3741,4247,3739,4238,3739,4235,3739,4230,3739,4223,3738,4215,3738,4215,3737,4214,3733,4212,3730,4209,3730,4209,3729,4208,3724,4206,3719,4205,3718,4204,3718,4201,3720,4184,3719,4167,3719,4161,3719,4155,3719,4153,3717,4153,3712,4151,3710,4149,3708,4148,3706,4145,3704,4143,3705,4138,3706,4132,3705,4125,3705,4123,3708,4123,3717,4124,3716,4116,3714,4103,3721,4098,3722,4097,3723,4097,3727,4098,3731,4097,3731,4084,3732,4070,3732,4066,3730,4064,3729,4064,3727,4064,3722,4064,3723,4059,3724,4053,3721,4051,3721,4051,3720,4050,3712,4049,3709,4044,3709,4043,3708,4043,3707,4042,3706,4042,3702,4039,3695,4036,3693,4036,3691,4034,3688,4032,3685,4032,3684,4032,3683,4031,3683,4031,3682,4030,3680,4028,3679,4023,3680,4021,3677,4020,3671,4017,3664,4013,3660,4014,3660,4011,3661,4006,3657,4006,3642,4006,3628,4004,3621,4003,3622,4010,3623,4015,3621,4016,3618,4017,3615,4019,3615,4020,3613,4021,3612,4023,3612,4027,3612,4029,3611,4031,3611,4036,3607,4037,3597,4041,3584,4040,3583,4040,3582,4040,3580,4042,3575,4042,3571,4042,3569,4038,3569,4038,3568,4037,3567,4030,3562,4027,3558,4025,3556,4021,3556,4020,3555,4020,3551,4018,3549,4016,3548,4015,3546,4014,3548,4009,3556,4009,3573,4011,3581,4003,3582,4003,3582,4001,3584,3996,3587,3993,3594,3987,3599,3981,3600,3981,3600,3979,3600,3973,3599,3966,3598,3962,3597,3959,3594,3953,3590,3947,3589,3947,3589,3945,3589,3945,3588,3943,3587,3941,3585,3939,3584,3939,3584,3938,3577,3927,3570,3919,3567,3917,3564,3914,3562,3912,3559,3910,3556,3907,3554,3902,3554,3901,3554,3899,3554,3874,3553,3849,3553,3848,3552,3848,3542,3841,3543,3824,3544,3823,3544,3822,3545,3816,3544,3808,3544,3806,3542,3805,3535,3803,3536,3793,3537,3787,3536,3782,3535,3780,3534,3777,3533,3776,3533,3775,3533,3774,3532,3773,3526,3770,3523,3764,3519,3757,3513,3752,3513,3752,3512,3750,3512,3750,3511,3749,3508,3748,3508,3745,3508,3745,3507,3744,3506,3744,3504,3743,3504,3743,3502,3742,3498,3742,3496,3740,3486,3734,3477,3729,3474,3727,3468,3726,3456,3727,3444,3727,3444,3721,3443,3716,3443,3714,3439,3714,3434,3715,3429,3714,3428,3714,3428,3712,3428,3704,3429,3694,3430,3694,3431,3694,3436,3695,3437,3693,3442,3685,3452,3686,3454,3686,3455,3686,3459,3684,3462,3681,3464,3681,3464,3679,3464,3675,3466,3671,3466,3669,3467,3668,3468,3668,3468,3666,3468,3664,3470,3663,3475,3662,3480,3658,3482,3658,3482,3656,3485,3651,3489,3646,3491,3643,3493,3642,3499,3638,3503,3630,3508,3625,3511,3619,3511,3618,3511,3616,3510,3607,3518,3607,3530,3608,3542,3607,3544,3607,3544,3605,3548,3602,3549,3596,3550,3596,3551,3595,3557,3594,3565,3593,j,3565,3592,f,3565,3576,3564,3559,j,3562,3558,f,3562,3558,3561,3557,3560,3554,3557,3553,3556,3553,3556,3551,3556,3551,3555,3549,3555,3547,3554,3545,3554,3545,3552,3544,3547,3542,3541,3541,3537,3541,3533,3541,3513,3541,3493,3540,j,3493,3538,f,3491,3528,3500,3528,3503,3528,3505,3527,3508,3527,3512,3524,3513,3524,3514,3524,3519,3524,3521,3520,3522,3520,3522,3518,3523,3516,3525,3515,3530,3514,3531,3513,3534,3507,3534,3498,3533,3491,3534,3485,3532,3478,3528,3474,3523,3469,3521,3463,3520,3458,3516,3456,3514,3455,3512,3453,3511,3453,3510,3452,3504,3450,3496,3452,3492,3452,3492,3449,3493,3448,3492,3447,3492,3443,3491,3440,3491,3435,3496,3435,3500,3435,3499,3433,3499,3424,3499,3414,3499,3412,3502,3412,3504,3413,3507,3411,3508,3410,3510,3410,3540,3411,3570,3410,3574,3411,3579,3410,3580,3410,3580,3409,3585,3407,3588,3401,3589,3401,3590,3400,3594,3397,3597,3396,3606,3391,3609,3381,3610,3379,3613,3377,3618,3374,3624,3368,3627,3364,3629,3359,3636,3355,3639,3346,3641,3343,3643,3342,3646,3340,3647,3337,3648,3335,3649,3334,3653,3330,3658,3327,3659,3328,3659,3326,3668,3313,3676,3305,3679,3303,3682,3298,3685,3294,3688,3291,3693,3282,3697,3272,3700,3262,3703,3261,3707,3260,3707,3252,3707,3244,3709,3230,3709,3222,3712,3216,3713,3213,3706,3158,3704,3157,3702,3157,3702,3157,3700,3156,3695,3156,3695,3151,3695,3145,3694,3139,3694,3139,3693,3138,3690,3137,3688,3135,3688,3135,3688,3134,3688,3106,3688,3078,3688,3076,3689,3074,3689,3074,3690,3074,3707,3074,3722,3073,j,3722,3071,f,3722,3066,3724,3064,3725,3064,3726,3064,3736,3064,3743,3061,3744,3062,3744,3060,3743,3052,3750,3051,j,3750,3050,f,3751,3028,3751,3006,3751,3004,3748,3003,3748,3003,3747,3002,3745,2999,3741,2998,3738,2998,3738,2994,3732,2991,3722,2991,3717,2992,3715,2990,3715,2989,3713,2989,3709,2990,3707,2989,3705,2988,3707,2979,3709,2970,3707,2966,3704,2962,3703,2962,3699,2960,3685,2951,3672,2951,3658,2952,3655,2953,3655,2955,3652,2963,3643,2961,3642,2961,3641,2962,3640,2964,3635,2964,3628,2966,3625,2971,3625,2973,3624,2973,3612,2979,3607,2989,3604,2995,3599,2999,3593,3003,3584,3001,3584,3001,3583,3001,3580,3001,3580,2999,3580,2998,3581,2997,3583,2993,3586,2990,3587,2989,3587,2988,3589,2987,3589,2986,3592,2986,3593,2984,3596,2978,3603,2975,j,3605,2974,f,3606,2967,3606,2961,3606,2946,3606,2930,3607,2921,3604,2917,3603,2916,3602,2915,3597,2912,3592,2910,3591,2909,3590,2909,3590,2904,3587,2902,3575,2897,3560,2897,3531,2898,3501,2897,3498,2897,3495,2898,3492,2899,3492,2905,3492,2906,3491,2907,3491,2908,3490,2909,3485,2914,3482,2921,3480,2917,3475,2916,3475,2916,3474,2915,3469,2910,3465,2905,3464,2904,3463,2903,3461,2902,3458,2902,3451,2902,3447,2897,3446,2897,3445,2896,3444,2896,3443,2895,3442,2894,3441,2893,3441,2892,3441,2891,3443,2884,3448,2881,3454,2879,3458,2875,3463,2871,3461,2863,3458,2846,3468,2837,3468,2837,3469,2835,3471,2829,3477,2826,3478,2826,3478,2824,3481,2817,3488,2812,f,3489,2812,3489,2810,c]],label:"Silver Trail",shortLabel:"ST",labelPosition:[284.2,373.8],labelAlignment:[t,v]},"CA.YT.KL":{outlines:[[i,1750,3255,f,1747,3246,1747,3233,1748,3224,1746,3215,j,1744,3205,f,1657,2938,1405,2696,1173,3149,940,3600,j,1249,3802,f,1260,3822,1279,3836,1286,3842,1292,3847,1301,3856,1307,3867,1308,3870,1310,3872,1315,3879,1317,3885,1320,3895,1325,3903,1327,3905,1326,3905,1328,3921,1327,3936,1327,3949,1328,3962,1329,3970,1325,3973,1324,3975,1323,3977,1322,4014,1322,4051,1322,4065,1327,4072,1334,4079,1340,4085,1349,4091,1350,4101,1614,4289,1650,4390,1652,4398,1653,4406,1653,4407,1653,4409,j,1653,4409,f,1655,4414,1660,4417,1661,4418,1661,4419,1662,4426,1661,4434,1661,4436,1662,4436,1665,4441,1667,4447,1667,4448,1668,4449,1673,4451,1673,4458,1673,4460,1673,4462,1675,4467,1680,4473,1681,4486,1680,4499,1680,4501,1681,4501,1684,4506,1686,4513,1692,4597,1681,4676,1681,4682,1678,4685,1673,4689,1674,4696,1674,4709,1673,4723,1673,4725,1672,4727,1671,4729,1669,4732,1669,4734,1668,4736,1668,4757,1668,4778,1668,4780,1667,4782,1663,4792,1664,4805,1664,4807,1664,4810,1662,4819,1659,4828,1659,4829,1658,4830,1657,4832,1657,4837,1657,4839,1656,4839,1654,4841,1654,4843,1655,4860,1654,4875,1655,4884,1652,4891,1651,4891,1650,4892,1649,4894,1648,4896,1647,4904,1648,4912,1648,4917,1647,4919,1644,4927,1643,4935,1643,4936,1643,4937,1642,4965,1642,4993,1642,4997,1643,5002,1644,5008,1644,5015,1645,5017,1645,5019,1647,5028,1651,5033,1653,5034,1653,5035,1653,5037,1653,5039,1654,5041,1655,5043,1657,5050,1661,5053,1669,5060,1675,5072,1676,5073,1675,5074,1676,5076,1676,5076,1680,5078,1682,5082,1683,5084,1683,5084,1692,5092,1699,5100,1703,5103,1704,5104,1706,5104,1706,5105,1714,5114,1725,5118,1729,5120,1733,5120,1741,5122,1746,5126,1752,5130,1758,5133,1759,5133,1760,5133,1771,5134,1782,5134,1784,5134,1787,5134,1788,5134,1789,5135,1794,5136,1800,5136,1820,5136,1839,5137,1847,5137,1852,5136,1854,5135,1854,5135,1856,5134,1858,5134,j,1868,5128,1868,5128,1869,5128,2062,4484,f,2064,4484,2065,4483,2130,4317,2098,4149,2060,4072,2057,4068,2055,4066,2055,4060,2055,4055,2052,4054,2052,4054,2052,4052,2055,4035,2044,4029,2038,4025,2033,4019,2031,4017,2031,4013,2031,4011,2029,4010,2026,4008,2024,4006,2020,4001,2013,4000,2013,4000,2012,3999,2012,3996,2010,3994,2006,3989,2003,3983,2003,3982,2003,3981,2002,3978,2001,3976,2001,3975,2000,3974,1999,3972,1998,3970,1997,3970,1997,3968,1995,3964,1993,3963,2036,3834,1819,3520,j,1817,3515,f,1815,3516,1817,3514,j,1755,3381,1754,3380,1754,3380,f,1753,3375,1753,3371,1752,3363,1753,3356,1754,3355,1754,3353,1755,3329,1756,3304,1756,3284,1753,3266,1752,3262,1751,3258,f,1751,3258,1750,3255,c]],label:"Klondike",shortLabel:"KL",labelPosition:[140.3,351.5],labelAlignment:[t,v]},"CA.YT.KU":{outlines:[[i,1309,3873,f,1307,3870,1306,3868,1300,3856,1291,3847,1285,3842,1278,3837,1259,3822,1248,3802,j,939,3600,f,493,4464,46,5322,j,163,5432,f,164,5432,165,5432,171,5432,177,5431,178,5431,179,5430,184,5426,192,5428,198,5428,204,5428,j,301,5548,320,5549,f,326,5545,334,5541,335,5541,337,5540,343,5538,352,5539,356,5540,357,5537,357,5534,360,5534,375,5533,390,5534,395,5534,396,5531,397,5530,398,5529,400,5527,400,5521,400,5519,403,5520,411,5521,416,5518,418,5518,419,5517,421,5516,423,5515,425,5514,425,5513,427,5509,434,5510,442,5510,449,5511,454,5511,455,5516,456,5517,457,5517,462,5518,466,5520,468,5521,470,5520,473,5521,475,5523,482,5532,499,5530,505,5530,508,5531,509,5532,509,5534,508,5538,513,5537,517,5536,519,5538,520,5538,521,5538,528,5536,528,5542,529,5545,530,5546,531,5548,534,5547,544,5546,551,5550,552,5551,553,5552,555,5552,568,5559,568,5568,568,5577,568,5578,567,5579,567,5579,566,5580,556,5585,550,5593,549,5594,549,5594,546,5595,544,5597,543,5600,541,5602,540,5602,539,5604,537,5610,532,5613,531,5615,530,5616,528,5623,523,5628,523,5628,522,5629,522,5631,521,5631,519,5632,519,5636,518,5644,512,5647,509,5649,506,5652,502,5657,501,5664,501,5666,499,5667,496,5668,494,5670,493,5670,493,5680,494,5690,498,5706,503,5721,534,5805,983,6025,1425,6220,1516,6041,1588,5850,j,1588,5849,f,1623,5757,1654,5661,j,1657,5652,1788,5135,f,1787,5135,1786,5135,1783,5134,1781,5134,1770,5134,1759,5134,1758,5134,1757,5133,1751,5131,1745,5126,1740,5122,1732,5121,1728,5120,1724,5118,1713,5114,1705,5105,1705,5105,1703,5104,1702,5103,1698,5100,1691,5093,1682,5085,1682,5084,1681,5083,1679,5079,1675,5076,1675,5076,1674,5074,1675,5074,1674,5073,1668,5061,1660,5053,1656,5050,1654,5044,1653,5041,1652,5039,1652,5037,1652,5036,1652,5034,1650,5033,1646,5028,1644,5020,1644,5018,1643,5015,1643,5009,1642,5002,1641,4998,1641,4993,1641,4965,1642,4937,1642,4937,1642,4936,1643,4927,1646,4920,1647,4917,1647,4913,1646,4905,1647,4896,1648,4894,1649,4893,1650,4892,1651,4891,1654,4884,1653,4876,1654,4860,1653,4844,1653,4841,1655,4839,1656,4839,1656,4837,1656,4833,1657,4830,1658,4830,1658,4828,1661,4819,1663,4810,1663,4808,1663,4805,1662,4792,1666,4782,1667,4780,1667,4779,1667,4757,1667,4736,1668,4734,1668,4733,1670,4730,1671,4727,1672,4726,1672,4723,1673,4710,1673,4697,1672,4689,1677,4685,1680,4682,1680,4676,1691,4597,1685,4514,1683,4507,1680,4501,1679,4501,1679,4499,1680,4487,1679,4474,1674,4467,1672,4463,1672,4461,1672,4458,1672,4452,1667,4449,1666,4449,1666,4447,1664,4441,1661,4436,1660,4436,1660,4434,1661,4427,1660,4419,1660,4419,1659,4417,1654,4415,1652,4410,j,1652,4410,f,1652,4408,1652,4406,1651,4398,1649,4390,1613,4290,1349,4102,1348,4092,1339,4085,1333,4079,1326,4072,1321,4065,1321,4052,1321,4015,1322,3978,1323,3975,1324,3974,1328,3971,1327,3962,1326,3949,1326,3937,1327,3921,1325,3906,1326,3905,1324,3903,1319,3896,1316,3886,f,1314,3880,1309,3873,c]],label:"Kluane",shortLabel:"KU",labelPosition:[91.5,490.9],labelAlignment:[t,v]},"CA.YT.WH":{outlines:[[i,2343,5357,f,2274,5160,1868,5128,j,1868,5129,f,1867,5136,1858,5134,1855,5134,1854,5135,1853,5135,1852,5136,1846,5137,1839,5137,1819,5136,1799,5136,1793,5136,1788,5135,j,1658,5652,1654,5661,f,1623,5756,1588,5849,1727,5879,1865,5938,j,1890,5938,f,2081,5950,2253,6087,2254,6087,2254,6086,2333,6012,2446,5991,2387,5883,2410,5582,j,2410,5575,f,2403,5439,2343,5357,c]],label:"Whitehorse",shortLabel:"WH",labelPosition:[201.7,561.7],labelAlignment:[t,v]},"CA.YT.CA":{outlines:[[i,2988,4723,j,2464,4533,f,2437,4531,2432,4528,2431,4527,2431,4527,2420,4524,2408,4526,2401,4526,2396,4529,2389,4532,2380,4532,2365,4531,2349,4532,2334,4535,2324,4542,2324,4543,2323,4543,2316,4543,2310,4544,2296,4544,2286,4551,2285,4551,2283,4551,2268,4552,2253,4552,2242,4553,2236,4549,2224,4549,2211,4549,2207,4549,2204,4547,2198,4541,2189,4543,2186,4543,2184,4543,2177,4541,2170,4542,2161,4542,2155,4538,2149,4535,2144,4532,2143,4531,2142,4531,2136,4526,2130,4523,2123,4518,2119,4516,2113,4514,2111,4511,2111,4510,2110,4509,2108,4507,2107,4506,2102,4502,2098,4500,2088,4494,2078,4490,2076,4489,2076,4489,2072,4484,2064,4484,2062,4484,2061,4484,j,1867,5128,f,2273,5160,2343,5357,2402,5439,2409,5575,j,2409,5582,f,2386,5883,2446,5991,2596,5963,2807,6031,2809,6031,2811,6032,3096,6132,3428,6304,3434,6314,3447,6313,3497,6313,3547,6313,3567,6313,3586,6312,3587,6312,3589,6311,3593,6309,3598,6307,3601,6307,3603,6306,3615,6304,3623,6297,3633,6290,3641,6284,3643,6282,3645,6281,3647,6279,3650,6279,3652,6279,3655,6277,3656,6276,3657,6276,3669,6271,3676,6262,3677,6261,3678,6259,3683,6255,3688,6253,3693,6250,3698,6248,3706,6246,3712,6240,3716,6238,3720,6235,3723,6233,3727,6230,3864,6070,3905,5651,j,3904,5651,f,3903,5651,3902,5652,3901,5652,3901,5652,3898,5651,3897,5653,3897,5653,3897,5653,3895,5652,3895,5654,3895,5654,3894,5655,3893,5656,3893,5656,3893,5657,3892,5658,3892,5658,3892,5658,3892,5659,3891,5660,3891,5660,3891,5660,3890,5662,3887,5662,3886,5662,3884,5663,3883,5664,3883,5665,j,3883,5665,f,3881,5666,3881,5667,3881,5668,3881,5668,3880,5668,3879,5668,3879,5669,3879,5669,3878,5669,3878,5669,3877,5669,3877,5669,3875,5670,3873,5671,3872,5671,3871,5671,3871,5672,3871,5672,3871,5673,3870,5673,3868,5673,3865,5673,3863,5674,3860,5674,3859,5674,3858,5674,3854,5674,3853,5676,3853,5677,3853,5677,3853,5678,3852,5678,3851,5678,3851,5680,3851,5681,3850,5681,3850,5682,3850,5682,3844,5683,3840,5683,3840,5675,3835,5674,3831,5672,3830,5669,3829,5668,3830,5667,3830,5660,3829,5653,3829,5653,3828,5652,3824,5648,3820,5644,3812,5644,3804,5644,3775,5644,3746,5644,3746,5630,3747,5616,3747,5615,3748,5615,3756,5611,3760,5602,3760,5601,3762,5600,3766,5598,3768,5590,3768,5589,3769,5588,3771,5587,3773,5586,3776,5584,3778,5582,3778,5581,3778,5580,3780,5564,3780,5548,3779,5537,3780,5525,3780,5525,3781,5524,3783,5522,3789,5522,j,3789,5520,f,3789,5491,3789,5463,3789,5461,3789,5460,3791,5453,3802,5454,3803,5455,3804,5454,3806,5451,3807,5448,3810,5439,3820,5436,3822,5436,3822,5435,3825,5429,3829,5424,3830,5422,3831,5420,3832,5408,3829,5397,3828,5395,3828,5392,3827,5380,3829,5369,3830,5365,3830,5361,3830,5355,3829,5349,3829,5348,3828,5348,3825,5344,3820,5343,3817,5341,3816,5338,3816,5337,3814,5336,3810,5332,3809,5326,3807,5320,3802,5317,3799,5315,3795,5315,3790,5315,3785,5301,3786,5296,3790,5293,3794,5289,3794,5281,3795,5269,3791,5261,3788,5255,3784,5252,3779,5248,3775,5242,3774,5241,3774,5240,3774,5232,3775,5226,3776,5223,3776,5221,3777,5216,3777,5212,3778,5196,3778,5181,3778,5179,3778,5178,3777,5175,3778,5171,3776,5166,3772,5165,3766,5163,3766,5154,3767,5154,3766,5153,3756,5147,3748,5140,3747,5139,3746,5137,3745,5136,3746,5135,3745,5124,3746,5113,j,3748,5113,f,3765,5113,3782,5113,3785,5112,3785,5108,3784,5103,3788,5100,3792,5097,3799,5095,3800,5095,3800,5094,3804,5088,3809,5084,3811,5082,3811,5078,3809,5067,3815,5063,3816,5062,3816,5062,3819,5060,3819,5055,3819,5035,3819,5015,3814,5012,3813,5009,3801,5008,3789,5008,3788,5008,3788,5007,3785,5005,3786,4999,3786,4995,3787,4991,3787,4988,3787,4987,3789,4978,3795,4977,3795,4977,3795,4975,3797,4958,3788,4951,3788,4950,3787,4949,3785,4948,3785,4947,3783,4943,3778,4939,3777,4938,3777,4937,3777,4936,3776,4935,3770,4923,3763,4916,3754,4909,3749,4900,3749,4899,3748,4899,3744,4896,3743,4892,3743,4891,3742,4890,3737,4888,3735,4885,3735,4873,3735,4861,3583,4950,2991,4723,f,2990,4723,2988,4723,c]],label:"Campbell",shortLabel:"CA",labelPosition:[288.6,539.8],labelAlignment:[t,v]},"CA.YT.WL":{outlines:[[i,3907,5651,f,3866,6070,3729,6230,3725,6233,3721,6235,3717,6238,3714,6240,3707,6246,3700,6248,3694,6250,3690,6253,3684,6255,3679,6259,3678,6261,3677,6262,3671,6271,3659,6276,3658,6276,3656,6277,3654,6279,3651,6279,3648,6279,3647,6281,3645,6282,3643,6284,3635,6290,3625,6297,3616,6304,3605,6306,3602,6307,3600,6307,3595,6309,3590,6311,3589,6312,3587,6312,3568,6313,3549,6313,3498,6313,3449,6313,3435,6314,3429,6304,3098,6132,2812,6032,2810,6031,2808,6031,2598,5963,2447,5991,2334,6012,2255,6086,2255,6087,2254,6087,2082,5950,1891,5938,j,1866,5938,f,1728,5879,1589,5849,1517,6041,1426,6220,1525,6263,1624,6305,1624,6306,1625,6306,j,2523,6661,3549,7001,f,4223,7214,4906,7382,4907,7383,4909,7385,4912,7388,4917,7389,4918,7390,4919,7390,4928,7392,4927,7382,4926,7379,4926,7375,4926,7345,4926,7314,4925,7308,4928,7303,4928,7303,4928,7302,4930,7297,4935,7297,j,4935,7296,f,4935,7265,4935,7235,4935,7223,4934,7211,4931,7210,4931,7207,4931,7206,4929,7204,4926,7200,4923,7196,4922,7196,4922,7194,4919,7190,4916,7185,4916,7185,4915,7184,4913,7178,4910,7173,4909,7171,4908,7169,4908,7168,4907,7168,4903,7163,4904,7156,4904,7147,4904,7137,4904,7127,4903,7114,4907,7113,4911,7113,4919,7114,4918,7106,4916,7095,4924,7092,4925,7091,4925,7090,4926,7074,4926,7059,4926,7055,4927,7051,4928,7046,4924,7045,4916,7045,4914,7035,4899,7035,4885,7034,4882,7033,4878,7034,4874,7034,4874,7032,4874,7029,4874,7026,4873,7011,4875,6995,4875,6993,4876,6991,4876,6984,4880,6980,4883,6976,4883,6968,4883,6965,4882,6964,4881,6960,4878,6956,4878,6956,4877,6954,4875,6951,4876,6947,4877,6941,4875,6932,4874,6932,4873,6931,4868,6928,4865,6923,4864,6923,4863,6922,4854,6921,4852,6915,4852,6915,4851,6914,4850,6906,4842,6903,4842,6897,4842,6891,4849,6888,4856,6887,4857,6887,4857,6886,4865,6886,4872,6885,4875,6885,4878,6884,4885,6882,4884,6873,4884,6871,4886,6871,4887,6871,4888,6871,4892,6870,4896,6869,4896,6869,4897,6868,4901,6862,4906,6858,4907,6858,4907,6857,4907,6838,4906,6818,4900,6815,4895,6808,4892,6804,4892,6800,4891,6794,4891,6789,4885,6784,4884,6778,4884,6775,4884,6771,4884,6741,4884,6711,4884,6701,4883,6691,4856,6688,4839,6688,4828,6689,4820,6687,4815,6685,4810,6684,4805,6683,4805,6686,4804,6694,4798,6698,4793,6697,4794,6704,4793,6732,4792,6759,4792,6758,4791,6757,4791,6755,4790,6754,4787,6751,4784,6750,4776,6745,4769,6739,4768,6738,4766,6737,4764,6737,4763,6737,4761,6736,4760,6736,4754,6734,4750,6730,4748,6728,4745,6727,4744,6727,4743,6726,4738,6723,4734,6720,4734,6719,4733,6719,4732,6716,4730,6716,4705,6716,4679,6716,4678,6716,4678,6718,4676,6719,4677,6721,4675,6728,4670,6728,4663,6729,4656,6729,4652,6730,4653,6736,4643,6736,4633,6736,4629,6736,4625,6737,4616,6738,4615,6731,4615,6731,4615,6730,4614,6729,4614,6728,4613,6726,4612,6727,4605,6726,4599,6726,4598,6723,4598,6719,4599,6712,4599,6705,4599,6702,4596,6703,4596,6703,4595,6703,4587,6701,4587,6695,4586,6692,4576,6694,4565,6696,4554,6697,4542,6696,4540,6694,4537,6692,4536,6690,4531,6680,4521,6674,4518,6672,4515,6670,4506,6662,4497,6654,4493,6650,4489,6644,4488,6644,4487,6643,4482,6641,4474,6641,4459,6642,4444,6642,4443,6643,4443,6643,4441,6647,4441,6652,4441,6653,4440,6654,4438,6656,4437,6660,4436,6663,4433,6665,4432,6666,4431,6666,4422,6668,4421,6661,4420,6657,4416,6653,4416,6653,4415,6651,4415,6650,4415,6649,4412,6643,4409,6640,4408,6640,4408,6639,4406,6637,4405,6636,4405,6635,4404,6634,4404,6634,4403,6634,4396,6634,4389,6634,4383,6634,4379,6634,4376,6633,4374,6635,j,4374,6636,f,4373,6637,4373,6638,4373,6638,4373,6639,4372,6643,4372,6646,4372,6648,4371,6648,4368,6648,4367,6651,j,4366,6651,f,4366,6655,4363,6654,4362,6654,4360,6654,4360,6655,4359,6655,4358,6656,4358,6657,4358,6658,4358,6659,4357,6660,4357,6661,4357,6663,4357,6666,4357,6666,4356,6666,j,4356,6667,f,4355,6667,4353,6667,4353,6667,4352,6667,4352,6666,4352,6665,4352,6664,4352,6664,4352,6662,4350,6661,4350,6661,4349,6661,4349,6660,4349,6660,j,4348,6660,f,4346,6659,4346,6659,4345,6659,4346,6658,4345,6653,4345,6648,4345,6647,4345,6647,4343,6646,4344,6645,4344,6645,4344,6644,j,4343,6643,f,4342,6643,4341,6642,4341,6642,4340,6641,4338,6641,4338,6639,4338,6639,4337,6638,4337,6638,4336,6638,4336,6637,4335,6635,4334,6635,4334,6634,4333,6631,4331,6631,j,4331,6630,f,4331,6630,4330,6629,j,4330,6629,f,4329,6629,4329,6628,4328,6628,4328,6627,4328,6627,4327,6626,4327,6626,4326,6626,j,4326,6625,f,4323,6625,4322,6623,4322,6623,4321,6623,4320,6621,4319,6618,j,4318,6618,f,4318,6617,4318,6617,4316,6615,4316,6614,4315,6613,4315,6613,4306,6612,4297,6613,4286,6613,4277,6613,4276,6613,4274,6613,4272,6612,4272,6613,4272,6615,4272,6617,j,4272,6618,f,4272,6620,4270,6621,4269,6621,4269,6621,4268,6623,4267,6623,4266,6624,4266,6624,4265,6624,4264,6624,j,4264,6625,f,4263,6625,4262,6626,4262,6627,4261,6629,4260,6629,4260,6629,4260,6630,4259,6630,4259,6633,4257,6634,4257,6634,4256,6634,4254,6635,4254,6638,j,4254,6638,f,4254,6640,4253,6641,4252,6642,4251,6644,j,4251,6644,f,4251,6646,4249,6646,4248,6646,4247,6646,4245,6647,4245,6646,4245,6644,4245,6642,4245,6641,4245,6641,4245,6641,4245,6640,4245,6639,4244,6638,j,4243,6638,f,4243,6637,4243,6637,4240,6636,4237,6636,4234,6636,4232,6636,4231,6635,4229,6636,4219,6636,4210,6636,4209,6615,4209,6594,4206,6591,4201,6591,4197,6591,4198,6586,4198,6578,4198,6570,4198,6559,4200,6550,4201,6549,4202,6548,4206,6545,4208,6541,4209,6535,4215,6530,4216,6529,4217,6529,4218,6528,4219,6527,4222,6522,4224,6518,4225,6516,4225,6515,4226,6513,4229,6512,4232,6510,4236,6508,4236,6507,4238,6506,4242,6504,4242,6500,4242,6483,4241,6465,4241,6464,4239,6463,4227,6458,4225,6443,4225,6443,4224,6443,4200,6442,4175,6442,4175,6442,4174,6441,4166,6441,4159,6441,4162,6441,4165,6438,4166,6438,4167,6437,4170,6432,4176,6434,4190,6436,4192,6424,4196,6416,4202,6414,4203,6413,4204,6412,4216,6404,4223,6396,4224,6395,4225,6395,4226,6395,4226,6394,4230,6390,4230,6382,4229,6375,4229,6368,4229,6339,4229,6309,4228,6303,4230,6297,4232,6290,4237,6289,4240,6287,4240,6281,4239,6275,4239,6268,4239,6266,4242,6267,4246,6267,4251,6267,4251,6247,4251,6227,4251,6226,4250,6226,4247,6223,4241,6224,4240,6224,4239,6223,4237,6219,4233,6217,4229,6216,4230,6209,4231,6206,4230,6204,4229,6202,4228,6199,4225,6194,4222,6189,4221,6188,4221,6188,4219,6186,4219,6184,4219,6179,4217,6176,4217,6175,4216,6174,4212,6168,4207,6160,4205,6160,4204,6159,4203,6158,4203,6157,4202,6156,4201,6155,4199,6155,4197,6154,4195,6153,4193,6150,4192,6149,4193,6148,4192,6147,4192,6147,4187,6144,4182,6145,4177,6145,4172,6144,4165,6143,4167,6148,4168,6152,4165,6152,4146,6152,4127,6152,4125,6152,4125,6152,4124,6148,4122,6146,4117,6142,4110,6143,j,4044,6042,f,4037,6035,4037,6030,4036,6015,4036,5999,4036,5980,4037,5961,4044,5959,4044,5951,4045,5935,4045,5920,4045,5915,4042,5914,4037,5912,4035,5905,4035,5901,4034,5897,4034,5894,4032,5892,4027,5888,4022,5883,4021,5883,4021,5882,4017,5878,4011,5877,4007,5876,4003,5877,3995,5878,3991,5874,3988,5871,3987,5868,3985,5864,3981,5862,3980,5862,3980,5861,3977,5859,3976,5858,3976,5848,3976,5839,3976,5830,3976,5820,3976,5811,3976,5801,3976,5791,3976,5781,3976,5771,3976,5762,3976,5752,3976,5742,3976,5732,3976,5723,3976,5712,3976,5703,3976,5701,3974,5702,3974,5702,3974,5702,j,3972,5702,f,3971,5702,3971,5701,3970,5700,3969,5701,3968,5701,3967,5701,j,3967,5701,f,3967,5697,3967,5693,3967,5690,3966,5688,3966,5687,3966,5687,3964,5686,3965,5684,j,3964,5684,f,3962,5684,3961,5684,3960,5684,3958,5684,3957,5684,3956,5683,3956,5682,3956,5682,3956,5681,3956,5681,3955,5681,3955,5680,3955,5680,3954,5679,3954,5677,3951,5678,3951,5678,3950,5677,3949,5676,3947,5676,3946,5675,3946,5674,3946,5670,3946,5666,3946,5665,3946,5665,3945,5664,3945,5664,3945,5662,3944,5662,3943,5662,3942,5662,3942,5662,3941,5662,3939,5662,3938,5661,j,3938,5660,f,3937,5660,3937,5660,3936,5660,3936,5659,3936,5658,3936,5658,3935,5657,3935,5655,3935,5655,3935,5654,3934,5654,3934,5652,3934,5651,3933,5652,3929,5651,3925,5651,f,3916,5651,3907,5651,c]],label:"Watson Lake & Southern Lakes",shortLabel:"WL",labelPosition:[318,652.1],labelAlignment:[t,v]}}}];
g=d.length;if(r){while(g--){e=d[g];n(e.name.toLowerCase(),e,n.geo);}}else{while(g--){e=d[g];u=e.name.toLowerCase();a(s,u,1);h[s].unshift({cmd:"_call",obj:window,args:[function(w,x){if(!n.geo){p.raiseError(p.core,"12052314141","run","JavaScriptRenderer~Maps._call()",new Error("FusionCharts.HC.Maps.js is required in order to define vizualization"));
return;}n(w,x,n.geo);},[u,e],window]});}}}]);