# DSSA-Planner
Prototype for displaying codex entries on a region map.

The javascript loads [RegionMap.svg](https://github.com/klightspeed/EliteDangerousRegionMap)  into memory so that it can be manipulated by javascript. 

It then loads the DSSA Carrier Locations from the [Points of Interest (Combined POI sources, EDSM, GMP, DSSA, IGAU)](edsmPOI.csv) spreadsheet and displays them

NB: EDAstro does not allow cross domain CORS requests so the csv file cannoy be downloaded directly

If you supply coordinates in the url, then it will also display a green marker to show how a proposed site would fit into the network at that location. 

The red circles at 2,500 light years radius. If an circles overlap then the carriers at that locatin would be less then 5000light yeats apart.

Examples:

# ToDo

* Change the coords parameter to system name an look up the coordinates in EDSM
* Replace the edspPOI.csv file with something more permanent
* Add options for showing star and IGAU carriers

# Credits

* [RegionMap.svg](https://github.com/klightspeed/EliteDangerousRegionMap) supplied by CMDR Bravada Cadelanne from his repository [EliteDangerousRegionMap](https://github.com/klightspeed/EliteDangerousRegionMap)
* Based on a prototype from Canonn [Codex-Regions](https://github.com/canonn-science/Codex-Regions)
* Cmdr Orvidious at [EdAstro](https://edastro.com/mapcharts/files.html) for supplying the DSSA Coordinates 
