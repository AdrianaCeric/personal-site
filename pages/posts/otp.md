---
title: "OpenTripPlanner: Why and How"
date: 2023/03/19
description: The ultimate open-source, community driven trip planner
tag: open source software, transit, maps
image: https://aceric.vercel.app/images/beach.jpg
---

# OpenTripPlanner: Why and How

If you are looking for a reliable, flexible and open source solution for planning your trips using public transportation, bicycling, walking and other mobility options, you might want to check out OpenTripPlanner (OTP) -- I've been a huge fan of it for a while now. Unlike Google Maps or Apple Maps, which are proprietary and limited in their functionality and data sources, OTP is customizable, extensible and interoperable with widely available, open standard data formats such as OpenStreetMap and GTFS.

Here are some of the reasons why OTP is better than Google Maps or Apple Maps for transit routing and trip planning:

- **Supports multimodal trips**: You can combine different modes of transportation such as transit, pedestrian, bicycle and car segments. It's also SUPER customizable; uou can also specify your preferences for each mode, such as speed, safety, comfort and cost. OTP can also integrate with shared mobility services such as bike share and ride hailing! Talking about customizable...
- **Is flexible**: You can adjust various parameters such as maximum walk distance, transfer penalty, wheelchair accessibility and more. You can also create your own routing profiles based on different criteria such as fastest, shortest or greenest route. OTP can also handle complex scenarios such as flexible transit services (e.g., dial-a-ride), real-time updates (e.g., delays), fare calculation (e.g., zones) and more.
- **Open source and community-driven**: OTP is developed by a global community of developers, researchers, transit agencies and users who contribute code, documentation, feedback and support. You can access the source code on GitHub, where you can also report issues, request features or join the discussion. You can also use the online documentation to learn how to install, configure and use OTP. By using OTP, you are supporting an open source project that promotes transparency,
collaboration and innovation in the field of transportation.

As you can see, OpenTripPlanner offers many advantages over Google Maps or Apple Maps when it comes to transit routing and trip planning. If you want to try it out yourself, you can use one of the public instances hosted by various organizations around the world or set up your own instance using the instructions provided on the website! But I get it, the documentation can be daunting for first-timers -- I had a bunch of trouble setting it up too. But I found I good workaround that'll help you set it up fast!

## A beginner's guide to setting up an OpenTripPlanner instance locally

If you want to set up your own OTP instance locally, you can use otp2setup, a repository on github that simplifies the process of downloading and building OTP graphs for various regions. This guide will show you how to use otp2setup to run OTP on your machine.

### Prerequisites

To use otp2setup, you need to have the following installed on your machine:

- Java 11 or higher
- Make
- Curl
- Unzip
- Node.js 14 or higher
- Git

You can check if you have these tools by running `java -version`, `make -v`, `curl -V` and `unzip -v` in your terminal. If any of these commands fail, you need to check that it's installed. If not, try installing it again!

## Installation

I this setup tutorial, we'll be using `otp2-setup` which provides a Makefile that automates the tasks of downloading all requirements (OTP jar file, OSM data, GTFS data) and building a graph for a given region. A region is defined by a name and a bounding box that specifies the area of interest.

To use `otp2-setup`, you need to clone the repository from github. You can do this by running:

```
git clone https://github.com/leonardehrenfried/otp2-setup.git
```

This will create a folder called `otp2-setup` in your current directory. You can change into this folder by running:

```
cd otp2-setup
```

## Usage

To see the list of available regions, you can view the repository's [updated folders](https://github.com/leonardehrenfried/otp2-setup).

Once you have chosen (or added) a region, you can build a graph for it by running:

```
make build-<region>
```

For example, if you want to build a graph for Stuttgart, you would run:

```
make build-portland
```

To run OTP with the previously built graph, you can run:

```
make run-portland
```

Once that's done, you can now run your instance at http://localhost:8080! 

Happy trip planning!
