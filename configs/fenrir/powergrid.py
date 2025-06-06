# -*- coding: utf-8 -*-


LV_nominal_voltage = 0.4
LV_V_unit = "V"
LV_I_unit = "A"
LV_P_unit = "kW"

MV_nominal_voltage = 20.
MV_V_unit = "kV"
MV_I_unit = "kA"
MV_P_unit = "MW"

LV_CABLE_LENGTH_unit = "m"  # alternativ 'km'
MV_CABLE_LENGTH_unit = "km"  # alternativ 'm'

BIFROST_GRID_SIZE = 1 # how large a bifrost-grid-tile is

standard_cable_types = {"LV_STANDARD_CABLE": {"r_ohm_per_km": 0.868,  # "N2XRY 3x45sm 0.6/1kV"
                                              "x_ohm_per_km": 0.07648,
                                              "c_nf_per_km": 390,
                                              "g_us_per_km": 0,
                                              "max_i_ka": 0.16,
                                              "c0_nf_per_km": 177.3,
                                              "r0_ohm_per_km": 0.4053,
                                              "x0_ohm_per_km": 0.3046},
# 
# "LV_STANDARD_CABLE": {"r_ohm_per_km": 0.1013,  # "N2XRY 3x185sm 0.6/1kV"
#                                               "x_ohm_per_km": 0.06911504,
#                                               "c_nf_per_km": 690,
#                                               "g_us_per_km": 0,
#                                               "max_i_ka": 0.44,
#                                               "c0_nf_per_km": 312.4,
#                                               "r0_ohm_per_km": 0.4053,
#                                               "x0_ohm_per_km": 0.2764602},

                        "MV_STANDARD_CABLE": {'c_nf_per_km': 250, # "NA2XS2Y 1x150 RM/25 12/20 kV"
                                              'r_ohm_per_km': 0.206,
                                              'x_ohm_per_km': 0.116,
                                              'max_i_ka': 0.319,
                                              'type': 'cs',
                                              'q_mm2': 150,
                                              'alpha': 0.00403,
                                              'c0_nf_per_km': 83.3,
                                              'r0_ohm_per_km': 0.824,
                                              'x0_ohm_per_km': 0.464}}


MVLV_standard_trafo_type = "250 kVA"
HVMV_standard_trafo_type = "63 MVA"   # exchange 60 to 40 or 25 if necessary


if MV_nominal_voltage > 15:
    MVLV_standard_trafo_types = {"250 kVA" : {'i0_percent': 0.32,
                                              'pfe_kw': 0.8,
                                              'vkr_percent': 1.44,
                                              'sn_mva': 0.25,
                                              'vn_lv_kv': 0.4,
                                              'vn_hv_kv': 20.0,
                                              'vk_percent': 6.0,
                                              'shift_degree': 0,
                                              'vector_group': 'YNyn',
                                              'tap_side': 'hv',
                                              'tap_neutral': 0,
                                              'tap_min': -15,
                                              'tap_max': 15,
                                              'tap_step_degree': 0,
                                              'tap_step_percent': 1,
                                              'tap_phase_shifter': False,
                                              'vk0_percent': 6.0,
                                              'vkr0_percent': 1.095238,
                                              'mag0_percent': 100.0,
                                              'mag0_rx': 0.0,
                                              'si0_hv_partial': 0.9},
                                 "400 kVA": {'i0_percent': 0.3375,
                                             'pfe_kw': 1.35,
                                             'vkr_percent': 1.425,
                                             'sn_mva': 0.4,
                                             'vn_lv_kv': 0.4,
                                             'vn_hv_kv': 20.0,
                                             'vk_percent': 6.0,
                                             'shift_degree': 0,
                                             'vector_group': 'YNyn',
                                             'tap_side': 'hv',
                                             'tap_neutral': 0,
                                             'tap_min': -15,
                                             'tap_max': 15,
                                             'tap_step_degree': 0,
                                             'tap_step_percent': 1,
                                             'tap_phase_shifter': False,
                                             'vk0_percent': 6.0,
                                             'vkr0_percent': 1.095238,
                                             'mag0_percent': 100.0,
                                             'mag0_rx': 0.0,
                                             'si0_hv_partial': 0.9},
                                 "630 kVA": {'i0_percent': 0.2619,
                                             'pfe_kw': 1.65,
                                             'vkr_percent': 1.206,
                                             'sn_mva': 0.63,
                                             'vn_lv_kv': 0.4,
                                             'vn_hv_kv': 20.0,
                                             'vk_percent': 6.0,
                                             'shift_degree': 0,
                                             'vector_group': 'YNyn',
                                             'tap_side': 'hv',
                                             'tap_neutral': 0,
                                             'tap_min': -15,
                                             'tap_max': 15,
                                             'tap_step_degree': 0,
                                             'tap_step_percent': 1,
                                             'tap_phase_shifter': False,
                                             'vk0_percent': 6.0,
                                             'vkr0_percent': 1.095238,
                                             'mag0_percent': 100.0,
                                             'mag0_rx': 0.0,
                                             'si0_hv_partial': 0.9},
                                 "1250 kVA": {
                                            'i0_percent': 0.1819,
                                            'pfe_kw': 3.27,
                                            'vkr_percent': 4.77,
                                            'sn_mva': 1.25,
                                            'vn_lv_kv': 0.4,
                                            'vn_hv_kv': 20.0,
                                            'vk_percent': 6.0,
                                            'shift_degree': 0,
                                            'vector_group': 'YNyn',
                                            'tap_side': 'hv',
                                            'tap_neutral': 0,
                                            'tap_min': -15,
                                            'tap_max': 15,
                                            'tap_step_degree': 0,
                                            'tap_step_percent': 1,
                                            'tap_phase_shifter': False,
                                            'vk0_percent': 6.0,
                                            'vkr0_percent': 1.095238,
                                            'mag0_percent': 100.0,
                                            'mag0_rx': 0.0,
                                            'si0_hv_partial': 0.9
                                        }}

    HVMV_standard_trafo_types = {"63 MVA": {'i0_percent': 0.04,
                                             'pfe_kw': 22.0,
                                             'vkr_percent': 0.32,
                                             'sn_mva': 63.0,
                                             'vn_lv_kv': 20.0,
                                             'vn_hv_kv': 110.0,
                                             'vk_percent': 18.0,
                                             'shift_degree': 150,
                                             'vector_group': 'Dyn',
                                             'tap_side': 'hv',
                                             'tap_neutral': 0,
                                             'tap_min': -9,
                                             'tap_max': 9,
                                             'tap_step_degree': 0,
                                             'tap_step_percent': 1.5,
                                             'tap_phase_shifter': False,
                                             'vk0_percent': 11.9,
                                             'vkr0_percent': 1,
                                             'mag0_percent': 100,
                                             'mag0_rx': 0.0,
                                             'si0_hv_partial': 0.9},
                                 "40 MVA": {'i0_percent': 0.05,
                                             'pfe_kw': 18.0,
                                             'vkr_percent': 0.34,
                                             'sn_mva': 40.0,
                                             'vn_lv_kv': 20.0,
                                             'vn_hv_kv': 110.0,
                                             'vk_percent': 16.2,
                                             'shift_degree': 150,
                                             'vector_group': 'Dyn',
                                             'tap_side': 'hv',
                                             'tap_neutral': 0,
                                             'tap_min': -9,
                                             'tap_max': 9,
                                             'tap_step_degree': 0,
                                             'tap_step_percent': 1.5,
                                             'tap_phase_shifter': False,
                                             'vk0_percent': 11.9,
                                             'vkr0_percent': 1,
                                             'mag0_percent': 100,
                                             'mag0_rx': 0.0,
                                             'si0_hv_partial': 0.9},
                                 "25 MVA": {'i0_percent': 0.07,
                                             'pfe_kw': 14.0,
                                             'vkr_percent': 0.41,
                                             'sn_mva': 25.0,
                                             'vn_lv_kv': 20.0,
                                             'vn_hv_kv': 110.0,
                                             'vk_percent': 12.0,
                                             'shift_degree': 150,
                                             'vector_group': 'Dyn',
                                             'tap_side': 'hv',
                                             'tap_neutral': 0,
                                             'tap_min': -9,
                                             'tap_max': 9,
                                             'tap_step_degree': 0,
                                             'tap_step_percent': 1.5,
                                             'tap_phase_shifter': False,
                                             'vk0_percent': 11.9,
                                             'vkr0_percent': 1,
                                             'mag0_percent': 100,
                                             'mag0_rx': 0.0,
                                             'si0_hv_partial': 0.9}}
else:
    MVLV_standard_trafo_types = {"250 kVA" : {'i0_percent': 0.24,
                                             'pfe_kw': 0.6,
                                             'vkr_percent': 1.2,
                                             'sn_mva': 0.25,
                                             'vn_lv_kv': 0.4,
                                             'vn_hv_kv': 10.0,
                                             'vk_percent': 4.0,
                                             'shift_degree': 0,
                                             'vector_group': 'YNyn',
                                             'tap_side': 'hv',
                                             'tap_neutral': 0,
                                             'tap_min': -15,
                                             'tap_max': 15,
                                             'tap_step_degree': 0,
                                             'tap_step_percent': 1,
                                             'tap_phase_shifter': False,
                                             'vk0_percent': 6.0,
                                             'vkr0_percent': 1.095238,
                                             'mag0_percent': 100.0,
                                             'mag0_rx': 0.0,
                                             'si0_hv_partial': 0.9},
                                 "400 kVA": {'i0_percent': 0.2375,
                                             'pfe_kw': 0.95,
                                             'vkr_percent': 1.325,
                                             'sn_mva': 0.4,
                                             'vn_lv_kv': 0.4,
                                             'vn_hv_kv': 10.0,
                                             'vk_percent': 4.0,
                                             'shift_degree': 0,
                                             'vector_group': 'YNyn',
                                             'tap_side': 'hv',
                                             'tap_neutral': 0,
                                             'tap_min': -15,
                                             'tap_max': 15,
                                             'tap_step_degree': 0,
                                             'tap_step_percent': 1,
                                             'tap_phase_shifter': False,
                                             'vk0_percent': 6.0,
                                             'vkr0_percent': 1.095238,
                                             'mag0_percent': 100.0,
                                             'mag0_rx': 0.0,
                                             'si0_hv_partial': 0.9},
                                 "630 kVA": {'i0_percent': 0.1873,
                                             'pfe_kw': 1.18,
                                             'vkr_percent': 1.0794,
                                             'sn_mva': 0.63,
                                             'vn_lv_kv': 0.4,
                                             'vn_hv_kv': 10.0,
                                             'vk_percent': 4.0,
                                             'shift_degree': 0,
                                             'vector_group': 'YNyn',
                                             'tap_side': 'hv',
                                             'tap_neutral': 0,
                                             'tap_min': -15,
                                             'tap_max': 15,
                                             'tap_step_degree': 0,
                                             'tap_step_percent': 1,
                                             'tap_phase_shifter': False,
                                             'vk0_percent': 6.0,
                                             'vkr0_percent': 1.095238,
                                             'mag0_percent': 100.0,
                                             'mag0_rx': 0.0,
                                             'si0_hv_partial': 0.9}}

    HVMV_standard_trafo_types = {"63 MVA": {'i0_percent': 0.04,
                                             'pfe_kw': 22.0,
                                             'vkr_percent': 0.32,
                                             'sn_mva': 63.0,
                                             'vn_lv_kv': 10.0,
                                             'vn_hv_kv': 110.0,
                                             'vk_percent': 18.0,
                                             'shift_degree': 150,
                                             'vector_group': 'Dyn',
                                             'tap_side': 'hv',
                                             'tap_neutral': 0,
                                             'tap_min': -9,
                                             'tap_max': 9,
                                             'tap_step_degree': 0,
                                             'tap_step_percent': 1.5,
                                             'tap_phase_shifter': False,
                                             'vk0_percent': 11.9,
                                             'vkr0_percent': 1,
                                             'mag0_percent': 100,
                                             'mag0_rx': 0.0,
                                             'si0_hv_partial': 0.9},
                                 "40 MVA": {'i0_percent': 0.05,
                                             'pfe_kw': 18.0,
                                             'vkr_percent': 0.34,
                                             'sn_mva': 40.0,
                                             'vn_lv_kv': 10.0,
                                             'vn_hv_kv': 110.0,
                                             'vk_percent': 16.2,
                                             'shift_degree': 150,
                                             'vector_group': 'Dyn',
                                             'tap_side': 'hv',
                                             'tap_neutral': 0,
                                             'tap_min': -9,
                                             'tap_max': 9,
                                             'tap_step_degree': 0,
                                             'tap_step_percent': 1.5,
                                             'tap_phase_shifter': False,
                                             'vk0_percent': 11.9,
                                             'vkr0_percent': 1,
                                             'mag0_percent': 100,
                                             'mag0_rx': 0.0,
                                             'si0_hv_partial': 0.9},
                                 "25 MVA": {'i0_percent': 0.07,
                                            'pfe_kw': 14.0,
                                            'vkr_percent': 0.41,
                                            'sn_mva': 25.0,
                                            'vn_lv_kv': 10.0,
                                            'vn_hv_kv': 110.0,
                                            'vk_percent': 12.0,
                                            'shift_degree': 150,
                                            'vector_group': 'Dyn',
                                            'tap_side': 'hv',
                                            'tap_neutral': 0,
                                            'tap_min': -9,
                                            'tap_max': 9,
                                            'tap_step_degree': 0,
                                            'tap_step_percent': 1.5,
                                            'tap_phase_shifter': False,
                                             'vk0_percent': 11.9,
                                             'vkr0_percent': 1,
                                             'mag0_percent': 100,
                                             'mag0_rx': 0.0,
                                             'si0_hv_partial': 0.9}}




















