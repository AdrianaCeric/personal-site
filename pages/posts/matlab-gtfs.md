---
title: "GRT Route Stats"
date: 2025/06/27
description: Getting some stats from GRT GTFS
tag: open source software, gtfs, transit, maps
image: https://aceric.vercel.app/images/beach.jpg
---

# GRT Route Stats

I had some Grand River Transit (GRT) GTFS data sitting on my computer and wanted to figure out how to analyze it with MATLAB. Specifically, I was curious about three things: which stops get the most service, how trip frequency varies by route, and when buses actually run throughout the day.

If you want to learn more about GTFS, read my [GTFS blog](gtfs-101) For those unfamiliar, GTFS (General Transit Feed Specification) is basically a standardized way transit agencies package their data. It's just a ZIP file containing CSV files with names like stops.txt, routes.txt, and trips.txt. Simple enough, but I'd never actually tried to work with it in MATLAB before.

## Getting the Data to Load

The first challenge was getting MATLAB to actually read the files. My initial attempt failed with "Unable to find or open '.\stops.txt'" even though I could see the files right there. Turns out the issue was that I needed to extract the ZIP file first. Once I did that:

```matlab
stops = readtable('stops.txt', 'TextType', 'string');
routes = readtable('routes.txt', 'TextType', 'string');  
trips = readtable('trips.txt', 'TextType', 'string');
stop_times = readtable('stop_times.txt', 'TextType', 'string');
```

The GRT dataset loaded with:
- 2,343 stops
- 53 routes  
- 11,319 trips
- 327,744 scheduled stop times

## Three Questions, Three Charts

### 1. Service Frequency by Route
First, I wanted to see which routes have the most trips. This required counting trips per route and sorting them:

```matlab
route_trip_counts = groupcounts(trips, 'route_id');
route_trip_counts = join(route_trip_counts, routes(:, {'route_id', 'route_short_name'}), 'Keys', 'route_id');
route_trip_counts = sortrows(route_trip_counts, 'GroupCount', 'descend');
```

The bar chart showed a clear hierarchy - some routes run much more frequently than others, which makes sense for a system serving different ridership levels across the region.

### 2. Most Frequently Served Stops  
Next, I counted how many times each stop appears in the schedule:

```matlab
stop_usage = groupcounts(stop_times, 'stop_id');
stop_usage = join(stop_usage, stops(:, {'stop_id', 'stop_name'}), 'Keys', 'stop_id');
stop_usage = sortrows(stop_usage, 'GroupCount', 'descend');
```

This revealed which stops are the real workhorses of the system - the ones that buses visit most often throughout the day.

### 3. Service Distribution by Hour
For the time analysis, I had to handle MATLAB's automatic conversion of the arrival_time column to duration format:

```matlab
if isduration(stop_times.arrival_time)
    arrival_seconds = seconds(stop_times.arrival_time);
    hours = floor(arrival_seconds / 3600);
end
hours = mod(hours, 24); % Handle times after midnight
```

The histogram showed the expected peaks during morning and evening rush hours, plus the service gaps during overnight hours.

## A Few Practical Notes

**File handling**: The `readtable` function with `'TextType', 'string'` worked well for handling the mixed data types in GTFS files.

**Data joins**: MATLAB's `join` function made it straightforward to combine the route and stop information with the frequency counts.

**Time parsing**: GTFS time data can be tricky since it allows for times like "25:30:00" (meaning 1:30 AM the next day). MATLAB handles this reasonably well when reading the files.

**Route shapes**: The dataset included detailed route shapes (44,286 coordinate points), which I used to create a map showing just the inbound routes to avoid visual clutter.

## Results

The analysis confirmed some intuitive things - major routes have more frequent service, central stops see more buses, and service peaks during rush hours. But it also revealed some specific patterns in how GRT structures its network that weren't immediately obvious from just looking at a route map.

Working with GTFS data in MATLAB turned out to be pretty straightforward once you get past the initial file loading. The standardized format means the same approach should work for any transit agency's data.

If you're interested in trying this with your local transit data, most agencies publish their GTFS files online. Just search for "[your city] GTFS data" and you'll likely find a downloadable ZIP file to experiment with.

---

*The complete MATLAB code for this analysis is available if anyone wants to adapt it for their own GTFS datasets.*