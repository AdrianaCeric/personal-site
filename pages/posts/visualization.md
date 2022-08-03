---
title: Exploring Accessibility in the Waterloo Region
date: 2022/8/3
description: Case studies, exploration and local discovery
tag: urban planning, python, accessibility
author: You
---

# Analyzing Accessibility in the Waterloo Region

I recently came across [UrbanAccess](https://github.com/UDST/urbanaccess) on GitHub and I thought it was magic. Since then I've gained a bit more of how to read and write code, but I still think the fact that we can visualize complex urban forms into simple visualizations is still very magical and powerful to me. There was no other option than to explore it. 

UrbanAccess is a tool that gathers data from [Open Street Map (OSM)](https://www.openstreetmap.org/#map=2/63.3/-109.3) and uses a network tool called [Pandana](http://udst.github.io/pandana/) (a Python package for network analysis that uses contraction hierarchies to calculate super-fast travel accessibility metrics and shortest paths) to graph street notes and routes. This can help measure accessibility in a given city or area. Using a few lines of Python code (and also a read of their extensive documentation and use cases), this free, open-source tool can be used by the general public as well as urban planners, civil engineers, firms, municipalities, government, universities and more. 

Visualizing accessibility in a region can help municipalities understand where to allocate funding and/or expand transit/pedestrian access to key amenities. In the context of this blog post, I'm using the definition of accessibility as the ability of a person to travel to a destination/amenity in the shortest time possible. 

In this post, I'm going to do some analysis on accessibility of transit networks (Grand River Transit) and bike paths in the City of Waterloo in Canada along with miscellaneous analyses. Consider this a log of a fun exploration, not a journal. Think this exploration is the start of something new.

---

I'm choosing to analyze the the City of Waterloo because I'm very familiar with it. The boundaries in this project are very loosely defined; I used [bbox finder](http://bboxfinder.com/#0.000000,0.000000,0.000000,0.000000) to get a rough perimeter of the area to analyze. 

The tool supports every city that Open Street Map gathers data in, so feel free to follow along with a city of your choice. You can use the code I used by accessing this [repository]().

Contact me if you have any questions about this post or if you just want to nerd about this tool/transit with someone.

Time to explore!
---
Here, I primarily followed an UrbanAccess tutorial to make heat maps outlining accessibility to a certain amenity. In this case, I'm choosing restaurants because it's a common, prevalent and generally desirable amenity across most cities. The x-axis represents the latitude and the y-axis represents the longitude. The coloured bar on the right shows the distance in metres (m) from the restaurants.

Here's Toronto! Note the density. There's generally a lot of restaurants accessible within around 200m, especially near the downtown. What's interesting is that there's a specific purple patch without any restaurants. This could be because of lack of public data, so I'll have to dig further into that. 
![restaurant-toronto](./../../public/images/restaurant-toronto.png)

Comparing that to Waterloo, we're seeing most of the restaurants being available from short distances in the Uptown Waterloo/university area. If we approach the bottom-right corner of the map, we see a large number of restaurants in Downtown Kitchener. Conversely, the more we diverge from the city centers, we observe less restaurants being accessible. There are whole suburbs and neighborhoods without immediate access to a food amenity. 
![restaurant-waterloo](./../../public/images/restaurant-waterloo.png)

You might have a lot of questions. Don't worry, same! There's a lot to unpack here:
- What do the dots on the map represent?
- If it's accessible within 200m, I'm still unsure as to where the starting points of those measurements are from.

Over time, I hope to get some of these answers and update this post when that time comes. For now, I'm just happy my code ran and that I was able to learn so much about GTFS/OMSnx/Pandana/Open Street Map along the way. Hope you learned more about urban data visualization and/or got a newfound spark to create something of your own. 

Until next time (or on an updated version of this exploration post), 

Adriana