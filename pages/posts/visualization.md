---
title: Analyzing Accessibility in the Waterloo Region
date: 2022/7/30
description: Case studies, exploration and local discovery
tag: urban planning, python, accessibility
author: You
---

# Analyzing Accessibility in the Waterloo Region

I came across [UrbanAccess](https://github.com/UDST/urbanaccess) last year on GitHub and back then I thought it was magic. Since then I've gained a bit more of an understanding on Matplotlib, but I still think the fact that we can visualize complex urban forms into simple visualizations is still very magical and powerful to me. Accessibility in the context of this blog post means the ability of a person to travel to a destination/amenity in the shortest time possible. 

Visualizing accessibility in a region can help municipalities understand where to allocate funding and/or expand transit/pedestrian access to key amenities. 

UrbanAccess is a tool that gathers data from [Open Street Map (OSM)](https://www.openstreetmap.org/#map=2/63.3/-109.3) and uses a network tool called [Pandana](http://udst.github.io/pandana/) (a Python package for network analysis that uses contraction hierarchies to calculate super-fast travel accessibility metrics and shortest paths) to graph street notes and routes. Using a few lines of Python code (and also a read of their extensive documentation and use cases), this free, open-source tool can be used by the general public as well as urban planners, civil engineers, firms, municipalities, government, universities and more. 

In this post, I'm going to do some analysis on accessibility of transit networks (Grand River Transit) and bike paths in the City of Waterloo in Canada along with miscellaneous analyses. Consider this a log of a fun exploration, not a journal. 

I'm choosing to analyze the Waterloo Region because I'm very familiar with it, but the tool supports every city that Open Street Map gathers data in, so feel free to follow along with a city of your choice. You can use the code I used by accessing this [repository]() Growing up in this city, I recognize a fair share of its flaws, but I also acknowledge how much it has improved. I'm curious to see how some visualization can help the general public and city-building actors improve our urban fabric. Visualizing a city's strengths and flaws can provide us with granular clues and patterns that traditional methods do not. Hopefully this inspires you to try similar analyses in your city!

Contact me if you have any questions about this post or if you just want to nerd about this tool/transit with someone.

Let's explore!

```
n = 3
```

---

![restaurant-toronto](./../../public/images/restaurant-toronto.png)

![restaurant-waterloo](./../../public/images/restaurant-waterloo.png)