#!/opt/conda/bin/python
# -*- coding: utf-8 -*-

address = "http://127.0.0.1:7001"
# adress = "http://host.docker.internal:7001" # use this, if FENRIR conncets to BIFROST running in a docker container...
# insert your local IP
bifrost_url = "http://127.0.0.1:9091"

PATH_TO_FRAGMENTFILE = './fragments/Fenrir.fragment.yaml'
PATH_TO_FRAGMENTFILE_HIGHLIGHT = './fragments/Fenrir.fragment.highlight.yaml'

loadFlowMode = "symmetrical"
#loadFlowMode = "asymmetrical"

# calculate cable-length automatically
calcCableLength = True
# calcCableLength = False

# Highlight Cables/Trafo at critical Loadings
highlightActive = False
# Threshold in %
highlightWarning = 70
highlightAlert = 100

author = "fxz"
# logging level
#loggingLevel = "error"
#loggingLevel = "warning"
#loggingLevel = "debug"
loggingLevel = "info"

# disable flask logging each rest call
flaskLogging = False

# enable to create pandapower network files locally
exportNetwork = False

# static_module_files_folder = "/static/modules/Fenrir"
MODULE_SUBSCRIPTIONS = [
      "ACTIVE-POWER-3P",
      "CONDUCTIVE",
      "SWITCH-POSITION",
      "POWERED",
      "TRAFO-TYPE",
      "CABLE-LENGTH"]

MODULE_PROVISIONS = [
      "VOLTAGE-3P",
      "VOLTAGE-ANGLE-3P"
      "ACTIVE-POWER-3P",
      "REACTIVE-POWER-3P",
      "CURRENT-3P",
      "LOADING",
      "CONDUCTIVE",
      "SWITCH-POSITION",
      "POWERED",
      "TRAFO-TYPE",
      "TRAFO-CURRENT",
      "TRAFO-VOLTAGE",
      "CABLE-LENGTH",]

# register info for bifrost
register_info = {
  "moduleId"    : "Fenrir",
  "label"       : "Load Flow Solver",
  "about"       : "A load flow solver module based on PandaPower.",
  "hook"				: [900],
  "samplingRate": 60,
  "endpoints"   : {
    "doc"       : "www.google.at",
    "fragment"  : "{module_url}/rest/fragment",
    "init"      : "{module_url}/rest/init",
    "log"       : "{module_url}/rest/log",
    "ping"      : "{module_url}/rest/ping",
    "update"    : "{module_url}/rest/update",
  },
  "parameters"  : {
    "init": [],
    "update": [],
    "log" : []
  },
    "subscriptions" : MODULE_SUBSCRIPTIONS,
    "requires"      : [],
    "provides"      : MODULE_PROVISIONS
}


all_elements = "/domains/powergrid/allElements"
all_powerlines = "/domains/powergrid/allConnections"

LV_POWERGRID_CONNECTOR_TYPE_ID = "POWERGRID-CONNECTOR"
MV_POWERGRID_CONNECTOR_TYPE_ID = "MV-POWERGRID-CONNECTOR"

MV_GENERATOR_CONNECTOR_TYPE_ID = "MV-GENERATOR-CONNECTOR"

LV_TRANSFORMER_TYPE_ID = "LV-TRANSFORMER"
MV_TRANSFORMER_TYPE_ID = "MV-TRANSFORMER"

LV_POWERGRID_NODE_TYPE_ID = "POWERGRID-NODE"
MV_POWERGRID_NODE_TYPE_ID = "MV-GRID-NODE"

LV_CABLE_UNDERGROUND_TYPE_ID = "CABLE-UNDERGROUND-SD"
MV_CABLE_UNDERGROUND_TYPE_ID = "MV-CABLE-UNDERGROUND"
MV_CABLE_OVERHEAD_TYPE_ID = "MV-CABLE-OVERHEAD"

MV_CABLE_LENGTH_TYPE_ID = "MV-CABLE-LENGTH"
CABLE_LENGTH_TYPE_ID = "CABLE-LENGTH"

LV_POWERSWITCH_TYPE_ID = "POWERSWITCH"
MV_POWERSWITCH_TYPE_ID = "MV-POWERSWITCH"

FUSE                          = "FUSE"
BATTERY_STORAGE_SMALL_TYPE_ID = "BATTERY-STORAGE-SMALL"
BATTERY_STORAGE_LARGE_TYPE_ID = "BATTERY-STORAGE-LARGE"
HOUSEHOLD_BATTERY_TYPE_ID = "HOUSEHOLD-BATTERY"
SOLAR_PANEL_TYPE_ID = "SOLAR-PANEL"
CHARGING_POLE_TYPE_ID = "CHARGING-POLE"
ACTIVE_POWER_3P_TYPE_ID = "ACTIVE-POWER-3P"
MV_ACTIVE_POWER_3P_TYPE_ID = "MV-ACTIVE-POWER-3P"
REACTIVE_POWER_3P_TYPE_ID = "REACTIVE-POWER-3P"
MV_REACTIVE_POWER_3P_TYPE_ID = "MV-REACTIVE-POWER-3P"

TAP_CHANGER_TYPE_ID = "TAP-CHANGER"
TAP_POSITION_TYPE_ID = "TAP-POSITION"

CONDUCTIVE_TYPE_ID = "CONDUCTIVE"
SWITCH_POSITION_TYPE_ID = "SWITCH-POSITION"
MV_SWITCH_POSITION_TYPE_ID = "MV-SWITCH-POSITION"
POWERED_TYPE_ID = "POWERED"
MV_POWERED_TYPE_ID = "MV-POWERED"
TRAFO_TYPE_TYPE_ID = "TRAFO-TYPE"
MV_TRAFO_TYPE_TYPE_ID = "MV-TRAFO-TYPE"
SLACK_VOLTAGE_TYPE_ID = "SLACK-VOLTAGE"

LV_TRAFO_BUILDING_ID = "TRAFO-BUILDING"

MV_ACTIVE_POWER_SET = "MV-ACTIVE-POWER-SET"
MV_VOLTAGE_SET = "MV-VOLTAGE-SET"
MV_VOLTAGE_ANGLE_3P = "MV-VOLTAGE-ANGLE-3P"
MV_REACTIVE_POWER_3P = "MV-REACTIVE-POWER-3P"


MV_TRAFO_VOLTAGE_TYPE_ID = "MV-TRAFO-VOLTAGE"
TRAFO_VOLTAGE_TYPE_ID = "TRAFO-VOLTAGE"
MV_VOLTAGE_3P_TYPE_ID = "MV-VOLTAGE-3P"
VOLTAGE_3P_TYPE_ID = "VOLTAGE-3P"
MV_VOLTAGE_ANGLE_3P_TYPE_ID = "MV-VOLTAGE-ANGLE-3P"
VOLTAGE_ANGLE_3P_TYPE_ID = "VOLTAGE-ANGLE-3P"
LOADING_TYPE_ID = "LOADING"
MV_LOADING_TYPE_ID = "MV-LOADING"
TRAFO_CURRENT_TYPE_ID = "TRAFO-CURRENT"
MV_TRAFO_CURRENT_TYPE_ID = "MV-TRAFO-CURRENT"
CURRENT_3P_TYPE_ID = "CURRENT-3P"
MV_CURRENT_3P_TYPE_ID = "MV-CURRENT-3P"
