const carsData = [
  {
    brand: "Audi",
    models: [
      {
        modelName: "A6 C5 1999",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_10_TP_M_Dnm_we_Qqxf_JFG_3r_Au_EYH_Wt_Mq4p_P_d8ceddb26b.png"
      },
      {
        modelName: "A4 B6 2004",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1k_Rmr2m5q_R4_Ly_YW_iph_F0_Yjaf1qe_Pt227_9bd19b3381.png"
      },
      {
        modelName: "A4 B7 2007",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1y_P3601ksq4_L_Fu_Ug_Od93_F_Fd_Dt_UZD_2j6z_727a116d12.png"
      },
      {
        modelName: "A5 8T 2001",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_D_Tc8sf_PH_xsz_F_Mandpk_EH_Trx_Djp_OY_3l_H_08523c4d6b.png"
      },
      {
        modelName: "A6 C7 2012",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_699_2012_Audi_A6_2_326eb63f85.png"
      },
      {
        modelName: "A3 8V 2015",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_571_2015_Audi_S3_fccf2177_94f7_4a88_9170_c4e668f6e420_f74623405c.png"
      },
      {
        modelName: "A4 B8 2015",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_573_2015_Audi_S4_2_68014d4fca.png"
      },
      {
        modelName: "A4 B9 2017",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_590_2017_Audi_S4_2_9b0ec6db19.png"
      },
      {
        modelName: "A3 8V 2018",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1eyg_W_n_YIO_En_Sb_MR_Ch_EC_cq673_VG_Oe9_Fj_248b9d7e1a.png"
      },
      {
        modelName: "A6 C8 2019",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_662_2019_Audi_S6_Avant_1_6b42c61603.png"
      },
      {
        modelName: "A4 B9 2020",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1d_VIIF_3_EB_w_X0vr_GYR_8_NR_0_Dy_Mg_S9x_Z6_fbb032b780.png"
      },
      {
        modelName: "A3 8Y 2020",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1kitkay9_Rl_Px_HLU_5bln_ZTW_2_Qp_P_He_Vhct4_c69ee5e482.png"
      },
      {
        modelName: "A7 4K 2021",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_19_hg_Rusl_G_w_TX_4_H_Taw8_C_Xv5h1sc47_T_On_709c8aebd3.png"
      },
      {
        modelName: "RS E-trone GT 2022",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Wv_Gr8xwyy_Xy_Pi_J_Mx_QJU_Jdabdo_N_Yx_E1s8_95704bda44.png"
      },
      {
        modelName: "A5 F5 2022",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_XL_2i_V8_Vj_QK_Hcn_R6_ZYVR_0m9q9qwezy_R_Fm_19f24007de.png"
      },
      {
        modelName: "R8 GT 2023",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_K_Xc_Wag_VJERA_Fgs_Nb_CYA_6_CTMWW_3_X_Ax_X6e_558e939f0f.png"
      },
      {
        modelName: "A4 B7 2009",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_14htt_Xzn_RH_Xd_Y2w_HA_Ps_WX_Eqc7j3_Mypg_M_8d7eb1f2ab.png"
      },
      {
        modelName: "R8 Coupe ",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_UR_15nv4_O_Cg_W_Rtl_Tk7_U_Ia_L_Zfx8jl_Pw_Ul_71a564ed3b.png"
      },
      {
        modelName: "A5 F5 2022",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_XL_2i_V8_Vj_QK_Hcn_R6_ZYVR_0m9q9qwezy_R_Fm_2e8d7d4423.png"
      },
      {
        modelName: "RS6 C8 2022",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_18_Jb_Uq_GUV_Hem_Gtj_Lmvk_Ktcatwgs_Rm_TQ_Oa_03bca2ed9a.png"
      },
      {
        modelName: "A4 B5 1999",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1qmh9ithjb_BQ_Uz5_B0_DPXK_7m0_X6uiuj_N_Ou_8d7c1d2900.png"
      },
      {
        modelName: "Индивидуальный дизайн",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_pngshechka_dlya_kastoma_4_ab7c6d7222.png"
      }
    ]
  },
  {
    brand: "Toyota",
    models: [
      {
        modelName: "Cressida MX83 1990",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Ulc_YW_0_A3_DCD_Fb_Mdlvw_Jd_Ofy_LE_Eh_Hx4_UV_8c05e00aed.png"
      },
      {
        modelName: "Soarer 1991",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_VLFGL_NBZW_Vh7_M_Xpu_YOZ_8h_Bbw_E2_Qqf_X_d7ca79ae98.png"
      },
      {
        modelName: "Celica 2000",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Fs_He_LWJMY_1d_Fh_U4_R35j_mt_Zzn_CK_Eney_ceffd8f1ba.png"
      },
      {
        modelName: "GR Supra 3.0 2020",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_UTZ_f_W_Fn9xd37b_Cw5_XF_9_Q_Pm_Nq_Xh_E75_48479ce1d1.png"
      },
      {
        modelName: "AE86 1987",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1g6_L_Gx7p5air2_TA_4g_Vj_CR_Cl_T4f_FD_Uly_Gx_5c1165d2e7.png"
      },
      {
        modelName: "MR2 1990",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1nqhs_Po_K8_T_Ql_C7_D_a5_Qsc_K_Tb_P_A2m_Ts_Bs_0398422de9.png"
      },
      {
        modelName: "Supra MK4 A80 1997",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_AC_8_TD_4_OU_71_GO_7u_P_Rr_VLP_4h_I_Ns_Lal8_Me_M_5faf10ef04.png"
      }
    ]
  },
  {
    brand: "Mitsubishi",
    models: [
      {
        modelName: "3000GT 1995",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_619_1995_Mitsubishi3000_GT_aa546e09_dff1_4c2b_bf27_7b5d99dd16a2_d8ff9ea9cd.png"
      },
      {
        modelName: "Galant 1998",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_522_1998_Mitsubishi_Galant_3402633f_c24c_4c62_92ed_66f1a0e1dfbe_e54e072bff.png"
      },
      {
        modelName: "Evolution 6 2000",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_FY_Av_Q_Qls_Df_Zeti_N_Uxj7_WLB_Srt_9a_PTB_a332be2987.png"
      },
      {
        modelName: "Eclipse GS 2002",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_697_2002_Mitsubishi_Eclipse_GS_2_c8459c5fb2.png"
      },
      {
        modelName: "Evo 8 2003",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_765_2003_Mitsubishi_Evo8_bb17771e_7664_4d98_bd1f_384cd735c4dd_e4d2a207fb.png"
      },
      {
        modelName: "Lancer Evolution 2004",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_15_H_Ngf_Pmp_U1_Ug_RNE_Vi_Q_Oni_GD_eqh_Cx6e_K_bef7987874.png"
      },
      {
        modelName: "Evolution X 2012",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail__fbb685ecc1.png"
      }
    ]
  },
  {
    brand: "McLaren",
    models: [
      {
        modelName: "P1 2013",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_O1v3r0_W0pg_GQ_3_D9_Zoh3_R3o8lx_Xh_K_Xd6k_e2605e2e25.png"
      },
      {
        modelName: "P1 2015",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1yf_X9q_DMWB_Xe_OW_0_Uiv_I_Ar2f_Xmn76_b_Lt_P_df026924c6.png"
      },
      {
        modelName: "P1 GTR 2022",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1p4k_U57c_Ek_Bq6_Jp_Ipg9a_Nr_Aa_ZV_Dp9_JR_48_a82b9363e5.png"
      },
      {
        modelName: "MCL60 F1 Car 2023",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_600_2023_MCL_60_Mc_Laren_F1_Car_f25539eb69.png"
      },
      {
        modelName: "Senna",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Ywnj_Qki1i_ZF_J_Bg_Jmrql_Bef_Btk_Wfkuh_04af0fec5e.png"
      }
    ]
  },
  {
    brand: "Mazda",
    models: [
      {
        modelName: "RX7 1981",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_648_1981_Mazda_RX_7_1_bd7857a1f8.png"
      },
      {
        modelName: "Miata 1991",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_602_1991_Mazda_Miata_1627846593.png"
      },
      {
        modelName: "FD RX-7 1993",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_B1po_P_Qn_Ez_G_Nzob1rj_V_Zr_UOURYY_Kp_WA_87f83b6395.png"
      },
      {
        modelName: "RX7 1993",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_671_1993_Mazda_RX_7_570be4c7_21e5_451e_b302_eefd63352a3a_8e2ff25561.png"
      },
      {
        modelName: "Miata MX-5 NA 1997",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_13_J_Ki5l_Bo_Mw_PM_4ko9_G6_Qhz_FUF_9is_Jp_S_Ic_3ec17dd414.png"
      },
      {
        modelName: "RX-8 2012",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_CF_7c_m4u_S_Cu_Wyy_Yk403dh1n_PN_9_Kg_exd_4a4eee0b98.png"
      },
      {
        modelName: "Test Mazda",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_5_f2b6367b65.png"
      }
    ]
  },
  {
    brand: "Lamborghini",
    models: [
      {
        modelName: "Countach 1984",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Ize_B_Rd_BY_7pl_N3_SHQ_7_H5_L_Bxy_R_Ow_En_Wbk_7b87bf281e.png"
      },
      {
        modelName: "Aventador SVJ 2020",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1z2_CEX_No_KAR_46_T_Kzee1_B_Ue9p_J4r_G95v_Zd_cb0b73a6cd.png"
      },
      {
        modelName: "Revuelto 2024",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_10ro_Ra_j_Ya9_Aw9_Qhj_Jwofa_I1y_D5_Rxu_Qw_d86e807b53.png"
      },
      {
        modelName: "Countach 1991",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_17_SZ_Hug_U3nx_Lk_D_Cp8k_X_Ho_W7_X2kln_J0bqm_ef66f4a8ef.png"
      },
      {
        modelName: "Huracan Performante 2014",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_A3z_Sl_Mjq89_Vp_Emmox_Ytxx_Giw_C1w_H9_O_L_e346b409a7.png"
      }
    ]
  },
  {
    brand: "Infiniti",
    models: [
      {
        modelName: "G35 2005",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_E8ae_PL_2_Z_Za_LSA_Cx0_Ida_Eegsbxeys_h_Wu_2239356719.png"
      },
      {
        modelName: "G35 2008",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1k_Hn_CC_Ql_MZGF_0_Yh_A_Ft_w9wh_Ebleag5_Jl5_fc9a1e4365.png"
      },
      {
        modelName: "G37 Sport Coupe 2008",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1x_R_Bvh_Lc_NXD_t_NS_42_Oc_Bjy_O7fx_Cy_2_Sjy_f68f84546e.png"
      },
      {
        modelName: "G37S 2008",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1bs_2nd_Fr_Lf_B_Sx_Fszly_G05c62_V_Hz_LLX_Nf_848ccf4eca.png"
      },
      {
        modelName: "G37 2009",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Eh6_3z_R_Bc12_Lx5_Stwf5_Iv_SIO_Ye_DM_7h6_B_00fd1a17bd.png"
      },
      {
        modelName: "G35 2013",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_664_2013infiniti_G35_1_efa530d53f.png"
      },
      {
        modelName: "Q60 2017",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_525_2017_Infiniti_Q60_97d1fac7_0290_48d7_af96_bb46d8a2bf0b_93b8ca61cb.png"
      },
      {
        modelName: "Q50 2019",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_13a_YP_Hd_s_R_Xu9_G_Kr1_R2f_Gi_O1_Qz_QTY_3_SHV_f75834fad0.png"
      }
    ]
  },
  {
    brand: "BMW",
    models: [
      {
        modelName: "E39 1999",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_v_I_Aqrt_Wiw5_So_E_Zp_ZV_22_NB_Mg_Bz_TM_6n_V_6910027736.png"
      },
      {
        modelName: "E46 2003",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_TN_Eva_W_Ue0_QL_4y1l_Dja_Qe6l_J_Wb22jzl_MQ_0e4b42eabf.png"
      },
      {
        modelName: "F30 2020",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_563_2015_BMW_335i_6d2366cd_8913_4813_ba27_5ece33eb1cc3_472f8f642e.png"
      },
      {
        modelName: "F32 2016",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_599_2016_BMWF_32_b065751c_6514_474b_a493_15ec2e9e1682_f4a89dbf00.png"
      },
      {
        modelName: "F80 2016",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_L_Uessr_Bp_D_Ph_FSC_1_Lna_Pb2_Pz0_S_Dq_P_Mg_173f5be5ee.png"
      },
      {
        modelName: "M6 2020",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_526_2020_BMWM_6_872ca434_dc24_4b1d_95fc_3099cbcee355_7197f6a282.png"
      },
      {
        modelName: "M8 2020",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_610_2020_BMWM_850i_1_faab191fdf.png"
      },
      {
        modelName: "M3 2022",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_543_2022_BMWM_340i_c9a4ff2a_f379_4e86_b85a_27feb1612607_6993be453a.png"
      },
      {
        modelName: "G12 2018",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_18y_N9m_O_Vx_G4_Jq_Ft_L_Iwo_Y_An7x9_Ax9_W_Tqm_c12df6485a.png"
      },
      {
        modelName: "E46 2007",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_F_Qs_B_Dt_FI_Za4_V_Ng_Xo2hc_H_Up8cw_Sn3wqfv_74bcf23a96.png"
      },
      {
        modelName: "M4 2015",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_P_9_Md_Yz_14_Tu_FH_0t_HPL_t_N3yz_Q8q_ZK_o_5942f853ad.png"
      },
      {
        modelName: "F30 2015",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1gv_G_Cm_D4o_XG_Vx4_EWTSXB_6m_Fic37e_HWS_4a5da28606.png"
      },
      {
        modelName: "M5 F90 2020",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_10lrxwl_Zbw6_Ah2_F_Gf2_Pgoy0_J_Ha_OE_Ih_WJ_c28fb1bd14.png"
      },
      {
        modelName: "M5 2023",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1x_Hrr_P8r_J_Ohbpi_OKC_YVB_Uoaz_Z_Zsn_T_0r_1952535b8f.png"
      },
      {
        modelName: "E90 2008",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_26_1_BMW_335xi2008_a85bb69c12.png"
      },
      {
        modelName: "M4 G82 2020",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_RK_6gclzl0i_Tfy_GA_Ojrsip_ZWGH_8x_QZ_6c_K_6506c481b5.png"
      },
      {
        modelName: "F30 2014",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_H_Pq_Jdl0s_Jf_N4_K9_p_Hel_Ef_R7l_Jn_Yr7_R_Fm_0e95754853.png"
      },
      {
        modelName: "E34 1995",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_12_B_Uf_Vd_VV_6_Su_Ex_Z9_Sft_HW_Ylu_MWQ_Tb_B_Fy_6b7cade59e.png"
      },
      {
        modelName: "E36 Кабриолет 1997",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Kk_PQ_Nn9prb5uf_S1k_Pmql_GPLZXTR_Uikl_L_f79690d704.png"
      },
      {
        modelName: "G20 2020",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1z_ID_NU_5d6_PRVUDBQI_4by4u_Ot_K_Po_Cd_VM_a97ab8f654.png"
      },
      {
        modelName: "M3 CS 2018",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_B0_Ta_Ky_F3vl_UE_6_E_Sz51ugmd_6_MCHYY_3_Rf_ca104d673e.png"
      },
      {
        modelName: "E90 2011",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_D2vmlzc_WV_0ku_NTYE_1_M6_D_Tw4_Jb_S_Rwnwi_A_9ff02a0325.png"
      },
      {
        modelName: "E28 1984",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_10c_Oo3r2_As_B_RCN_Dx_YFS_81_E_Ic_E82w_T_v_683a4e06b9.png"
      },
      {
        modelName: "M4 2016",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1f_Ugf_C0_Y_Icw_Da_Ih_Q9_Vphr2_4e61_Dg45_BU_b0adb816c7.png"
      },
      {
        modelName: "E30 M3 1994",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Dl_Qga_M_Qkcm_SJ_2wr_Pbx_OU_62ni4a_UP_Uw_Yt_87d7034957.png"
      },
      {
        modelName: "E36 1997",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Xs_O7_Mx57_Y_Pnd_Bf_G_Rcnn_M1fm_RN_6pr_Zar_M_5927c1d1d8.png"
      }
    ]
  },
  {
    brand: "Nissan",
    models: [
      {
        modelName: "GTS-X Skyline R31 1988",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1a_D_J90_N_Stp_W_Dui_Py_Q_Sa0l_Yr6_Sxv_NJM_0i_ced3f8085b.png"
      },
      {
        modelName: "240SX 1989",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1b_Cpuuko_EQN_Qqmv_BH_8g_L9_M9_Bpi_Sx86v_G_bbae72ab1a.png"
      },
      {
        modelName: "Laurel C33 Turbo 1990",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Euo_Xl_Qmwq_I3_Cv_S_dgg_R_Pyvji1_L49_CJA_0_38a865381b.png"
      },
      {
        modelName: "180SX 1992",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_673_1992_Nissan180_SX_f7cfecfe83.png"
      },
      {
        modelName: "Silvia S14 1993",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_A_Vb_L_Fdlw0_NPHQ_Dk_O4v_B_Loxd_P_Ji7_Zl3_MN_b479f5c818.png"
      },
      {
        modelName: "240SX 1994",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1i5fvy_M0_ETKV_Yxs_D9_S0r1z_J9_Jf_A9v_a_811a5c5a44.png"
      },
      {
        modelName: "R32 GTR 1995",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Xi_Zhmehdg_D995_XOR_Rg_E_Tbsh77_Vc1l13_C_cf6703a9c3.png"
      },
      {
        modelName: "Skyline R33 GTST 1995",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_7u_Zh_JR_4_k_Fmcys_B_Ue_H5d7_T_Mk_J_Gndyh_9ef7189f01.png"
      },
      {
        modelName: "Skyline GTS25 1997",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_670_1997_Nissan_Skyline_GTS_25_2_2208c5b1ee.png"
      },
      {
        modelName: "Silvia S14 200SX 1998",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1f_0e_Ihe_Sg_K_Ks_OQ_Jkz3n3_WHRI_h_R1zb5_L_47157a4fb4.png"
      },
      {
        modelName: "350Z 2003",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1uo4_X_Lyk_JM_Lb_U_4t3r_Zt_I62b_Jw_OU_Qh7t_f71c380327.png"
      },
      {
        modelName: "370Z 2016",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_777_2016_Nissan370_Z_1_4944d30ecc.png"
      },
      {
        modelName: "GTR R35 2019",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1d_Ez1_I_Ee_E24xui_NC_Vo_G7117_G85v_HU_Ggw_E_2607eb3747.png"
      },
      {
        modelName: "Silvia S15 2002",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1xv_AOT_Nes1i_vmp_Z_Lhpwm_X_Lh_Pcx4wj_i_S_09927c32cd.png"
      },
      {
        modelName: "Skyline GTR R34 2002",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1ha_T2_Cp_bl_Cx_Xbe_T00_B_Vz_EBZ_Broi27_Br3_b7d777c66a.png"
      }
    ]
  },
  {
    brand: "Mercedes-Benz",
    models: [
      {
        modelName: "SL500 1995",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_769_1995_Mercedes_Benz_SL_500_1_f404564afb.png"
      },
      {
        modelName: "SL500 2004",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Lxp_C_wdl_Is25_YJO_Syhkhyw_j0_D_Vte0_St_62c34ffee6.png"
      },
      {
        modelName: "E63 AMG 2008",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_720_2008_Mercedes_Benz_E63_AMG_1_eae062cdc8.png"
      },
      {
        modelName: "C250 Sport 2013",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_N1_XR_Uxlq_B5eq0_A_Fr_Tuqvht_Vr_H8_Zy3_Km_fa69fb779f.png"
      },
      {
        modelName: "CLS 550 2013",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_16xot5_KM_Cb_B8_EI_Ia_EAML_Ed9_m_G_Qyy_Xl_GQ_ab5956861c.png"
      },
      {
        modelName: "C63 AMG Black Series 2014",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_722_2014_Mercedes_Benz_C63_AMG_Black_Series_2_d9445733b3.png"
      },
      {
        modelName: "C63 AMG 2017",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1tqhi1xi_Ox_U_Wb1uq658_B_8_Vn_z_Fpc_G_Or_488a33d723.png"
      },
      {
        modelName: "CLA 250 2017",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_594_2017_Mercedes_CLA_250_2_a9ae873927.png"
      },
      {
        modelName: "AMG C43 Sedan 2017",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Ouhz_XD_4_Dsd_UUY_Hhsosy_D_Qvb27_Qk4_BO_Er_65e0cce95e.png"
      },
      {
        modelName: "E-Class C238 2019",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_747_2019_Mercedes_Benz_E_Class_C238_f9913134_9244_442b_9dbd_9178d1cc4d92_58acc0ada9.png"
      },
      {
        modelName: "AMG A35 2019",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1s_Nk16s_OL_7x_Se_Z05y_NO_Igc7u45r_Oh_37_S_ab34a17544.png"
      },
      {
        modelName: "AMG GT R 2022",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_16_VI_Iuv_WZ_Pcw_Jy_Dw_Z_Iy_Uwo_NK_Ge6_Os35_O_3a6c9f40e6.png"
      },
      {
        modelName: "190E 1993",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_HE_9n_Xpix_X_Lib0_C_glh_J9l6b_AX_As_O_Ps_Kz_cabd37b43c.png"
      },
      {
        modelName: "CLS63 AMG 2017",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1w_Q37_J6aqmf26_X4_SNE_Hnrqhu_Zr_Pf_dv_K_57f21e8f61.png"
      }
    ]
  },
  {
    brand: "Porsche",
    models: [
      {
        modelName: "911S 1971",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_710_1971_Porsche911_S_2_1356a6f81e.png"
      },
      {
        modelName: "911 (993) 1995",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1i_Mu_rjc40j_Iow_I9uv_W30_U_Rr_X_Tj_J_Mi_GJM_45c122ac2d.png"
      },
      {
        modelName: "911 (996) GT3R 2000",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_578_Porche911996_GT_3_R_1_01cc5ce8e0.png"
      },
      {
        modelName: "911 (997) GT3 RS 2006",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1kgc_FMSB_2_Dd_pxf_d_F7g_E_Gcfm_RIE_Ng_W_c5d3c9c74f.png"
      },
      {
        modelName: "911 (997) Targa 4S",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_532_2007_Porsche911997_1_GT_3_79b1dc6df2.png"
      },
      {
        modelName: "718 Cayman GTS 2015",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1ox5v_JJ_Qw_U9_Exde_V0_B_Nyit2g_W_Yc_Z_Orbdc_d066e58860.png"
      },
      {
        modelName: "911 Turbo S 2015",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_U664m_G0e_XB_9prls_Qoh_X_Diaf_Rkc_At_T_Zz_M_bc72e4e57e.png"
      },
      {
        modelName: "Cayman 2016",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_639_2016_Porsche_Cayman_ad9e9dde_fe05_4bde_9d25_97a46728c5bb_434f4f99ea.png"
      },
      {
        modelName: "718 Cayman GTS 2018",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_ICI_38_Vp_W4a_T0u_R2_S2_Aol_m_LZG_0_Vl_eh_N_3efb2255a6.png"
      },
      {
        modelName: "GT3 Touring 2018",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1o_Z_Ul_Bxph_Cf_BWXYAY_Qx_U11s_SDC_3bp_Lub_ef3b1a31e0.png"
      },
      {
        modelName: "Panamera 2020",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Ymrzq_Le_VNUS_Pqg5rhy_GY_44_Ve_C4_N_He_SMT_3928f191c0.png"
      },
      {
        modelName: "911 (992) GT3 2021",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_Porsche911_992_GT_3_e6d6bb9b_d517_4255_baa6_c3c958aa09ee_22f716e93d.png"
      },
      {
        modelName: "911 (992) Turbo S 2022",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_16_Lmvz_V_Tdc9x_Yg_Zzb_Oub_V_M4x_Uy_Vt_EFJ_0_b14f3e1d99.png"
      },
      {
        modelName: "911 Carrera S 2022",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1p1_Urtr_Ry_H_An6_9_J9ztf3_N_Alebi1o_Bfnx_23a468e532.png"
      },
      {
        modelName: "718 GT4 RS 2023",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Bu_EI_4_IWGO_Bc_EI_5_G_Vhc7_Xe8_SY_1_F4_Cfnmt_1401f4f29c.png"
      },
      {
        modelName: "718 Spyder 2023",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_12_Th_HL_2f_D_j_KL_Jq_Sy_D_Dr_B_g_Fb9_ZKAG_q1_6945ac6f56.png"
      },
      {
        modelName: "911 (991) Carrera 2023",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_QEA_Liq_EH_Yt1_M_Afds_H_Ynr3_Q_Hj_Hp_D4_BT_5_I_0a8f04c443.png"
      },
      {
        modelName: "911 (992) GT3 R 2023",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_536_2023_Porsche911_992_GT_3_R_686ccbc5_e787_4bf6_b46f_3147a1311731_723dbcc072.png"
      },
      {
        modelName: "911 (992) GT3 RS 2023",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_295_2023_Porsche911_992_GT_3_RS_Sofa49_4e49746d44.png"
      },
      {
        modelName: "Taycan 2023",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_QD_Lhb5u_L_Jv_Os_OWE_9_Yzc_4_Qt0wox2_ITUU_24a3c93615.png"
      },
      {
        modelName: "911 (964) Carrera 1994",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Wnwp_Fooe_H_Yqm_PW_Fb0d4ls8z_FV_Xxx_QR_9_F_2beb29d382.png"
      },
      {
        modelName: "911 (964) Carrera RWB 1994",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1i_Rh41_G_Ng_Ed_A_Uapb8ssr_L9x0wfg_Njw_V_6_a34f5efe19.png"
      },
      {
        modelName: "911 (991) GT2 RS 2017",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Jes7_ES_7yxm_E_Qh_U_Cdq1_Dnp7_Z_Wvq5e_Iueo_0e2a2d6982.png"
      }
    ]
  },
  {
    brand: "Honda",
    models: [
      {
        modelName: "Civic 1991",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_708_1991_Honda_Civic_2_b8c853d1b8.png"
      },
      {
        modelName: "NSX 1994",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1u_EBUOFNA_9_Paxcp_Pu5p4mm_Y9_FFP_E_Jm_Xx_b905a1674c.png"
      },
      {
        modelName: "Civic 1995",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_K_Sm4_fq_U65ipsv3zhv_Xjhp_P8_Rjh_Mi_A_y_3e1bd72c55.png"
      },
      {
        modelName: "Integra 1995",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Rb5a_Sw_Yxa_Mk_SJ_7rt_Rbs_Jb8_M6r_R_Wx_D_Ej_8f6232930d.png"
      },
      {
        modelName: "Civic LX 2000",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_675_2000_Honda_Civic_LX_1_300ff65cba.png"
      },
      {
        modelName: "Civic Type R 2000",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_SFKENA_7_Bwb_E7p5hcp_ENB_2_Fj0_ZIME_6a_R_572b295b0b.png"
      },
      {
        modelName: "Prelude 2001",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1j_E1_Spi_Bm_Ajc_NN_3_Uvit_U8e8_Tf_QQ_Ah9_U8_T_0c791ab1b2.png"
      },
      {
        modelName: "S2000 2003",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_598_2003_Honda_S2000_2_a140d6407d.png"
      },
      {
        modelName: "S2000 2004",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_L_MF_Twj_vi_AF_Zk4oen_C49_Rm9p_F774_Gmz_a4ca66625a.png"
      },
      {
        modelName: "Accord 2017",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_Z9_Ozcf_VN_1j_T_Kp_FH_F2_m_B6b3z06k_G_Ygb_948059f27f.png"
      },
      {
        modelName: "Accord 2020",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_122x_Ap_PF_Qprm_I_Sy8_G4_IN_0e_k_UL_Kxe_0z_0f1feffd24.png"
      },
      {
        modelName: "Civic 2020",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_607_2020_Honda_Civic_2_82ce5c6b43.png"
      },
      {
        modelName: "Civic Type R 2021",
        imgUrl: "https://api.viewside.ru/uploads/thumbnail_1_G_Xia_Yv5_HI_7d_S_Oh3dm0z_X_Esq2_Z_Lp_Azpm_B_51eebbc439.png"
      }
    ]
  }
]

function populateCarBrands() {
    const select = document.getElementById('carBrand');
    carsData.forEach(car => {
        const option = document.createElement('option');
        option.textContent = car.brand;
        option.value = car.brand;
        select.appendChild(option);
    });
}

function populateModels() {
    const brandSelect = document.getElementById('carBrand');
    const modelSelect = document.getElementById('carModel');
    const carImage = document.getElementById('carImage');

    const selectedBrand = brandSelect.value;

    modelSelect.innerHTML = '<option value="">Выберите модель</option>';
    carImage.src = '';

    if (selectedBrand) {
        const brand = carsData.find(car => car.brand === selectedBrand);
        if (brand) {
            brand.models.forEach(model => {
                const option = document.createElement('option');
                option.textContent = model.modelName;
                option.value = model.imgUrl; // Здесь устанавливаем значение как imgUrl модели
                modelSelect.appendChild(option);
            });
        }
    }
}

function updateCarDetails() {
    const modelSelect = document.getElementById('carModel');
    const carImage = document.getElementById('carImage');


    const selectedModelImgUrl = modelSelect.value;

    if (selectedModelImgUrl) {
        const selectedModel = carsData
            .map(car => car.models)
            .flat()
            .find(model => model.imgUrl === selectedModelImgUrl);

        if (selectedModel) {
            carImage.src = selectedModel.imgUrl;
        }
    }
}