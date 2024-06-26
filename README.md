# DSSA-Planner
Prototype for planning fleet carrier deployments on a region map.

The javascript loads [RegionMap.svg](https://github.com/klightspeed/EliteDangerousRegionMap)  into memory so that it can be manipulated by javascript. 

It then loads the DSSA Carrier Locations from the [Points of Interest (Combined POI sources, EDSM, GMP, DSSA, IGAU)](edsmPOI.csv) spreadsheet and displays them

NB: EDAstro does not allow cross domain CORS requests so the csv file cannot be downloaded directly

If you supply coordinates in the url, then it will also display a green marker to show how a proposed site would fit into the network at that location. 

The red circles are 2,500 light years radius. If an circles overlap then the carriers at that location would be less than 5,000 light years apart.

# Examples:

 * load without supplying coordinates [https://nofoollikeone.github.io/dssa-planner/](https://nofoollikeone.github.io/dssa-planner/)
 * Load with coodinates https://nofoollikeone.github.io/dssa-planner/?coords=6600,2000,17500
  

# ToDo

* Change the coords parameter to system name an look up the coordinates in EDSM
* Replace the edspPOI.csv file with something more dynamic
* Add options for showing star and IGAU carriers

# Credits

* [RegionMap.svg](https://github.com/klightspeed/EliteDangerousRegionMap) supplied by CMDR Bravada Cadelanne from his repository [EliteDangerousRegionMap](https://github.com/klightspeed/EliteDangerousRegionMap)
* Based on a prototype from Canonn [Codex-Regions](https://github.com/canonn-science/Codex-Regions)
* Cmdr Orvidious at [EdAstro](https://edastro.com/mapcharts/files.html) for supplying the DSSA Coordinates 
