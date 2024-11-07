---
title: Projections
description: Discover the projections that convert curved 3D surfaces to flat 2D surfaces.
author: Omar Kawach
date: October 21, 2024
---

# {{ $frontmatter.title }}

{{ $frontmatter.date }}, by {{ $frontmatter.author }}

## Projection types

When it comes to presenting maps to readers, geographers must choose a projection that is appropriate for the map's purpose and location. Projections transform three-dimensional curved surfaces to two-dimensional flat surfaces. Consequently, such transformations cause distortion to the maps. The following are the 4 types in which the relationship between features on a map may be distorted or preserved:

1. **Distance (Equidistant)**
   - Preserves distance between features
2. **True Direction (Azimuth)**
   - Preserves direction between features
   - Measured in degrees (°)
3. **Shape / Angle (Conformal)**
   - Cannot preserve shape and area at the same time
   - Continents distorted
4. **Area (Equal-Area)**
   - Distorts distance and shape
   - Preserves features to their exact size

## Projection techniques

The projection techniques, which affect the **longitude** (vertical lines) and **latitude** (horizontal lines) on a map, are another significant factor to consider. The following are the 3 primary projection techniques:

1. **Cylindrical**
   - Longitude lines appear straight, equally spaced, and parallel
   - Latitude lines appear straight, and sometimes not consistently equally spaced
2. **Conical**
   - Longitude lines appear as diverging
   - Latitude lines appear circular around the poles
3. **Azimuthal** (or Planar)
   - Increasingly distorted from the centre point (typically the South or North Pole as the centre point)
   - Longitude lines appear equally spaced and straight which become increasingly radiant
   - Latitude lines appear as equally spaced centric circles

<ContentFigure 
   :imgSrc="'../../../../assets/images/projection_surfaces.png'" 
   :imgAlt="'Cylinder, Cone, and Plane'"
   :description="'Cylinder, Cone, and Plane'"
   :anchorHref="'https://creativecommons.org/licenses/by-nc-sa/4.0/'"
   :anchorText="'Credit: PennState licensed under CC BY-ND 2.0'"
/>

## Projection explorer

Try out the projection explorer below now that you've learned about projection types and techniques.

<ProjectionExplorer />

## Test your knowledge

## Sources

<Sources 
  :sources="[
    {
      title: 'Map Projections and Distortion',
      url: 'http://www.geography.hunter.cuny.edu/~jochen/gtech361/lectures/lecture04/concepts/Map%20coordinate%20systems/Map%20projections%20and%20distortion.htm',
      author: 'Hunter College',
    },
        {
      title: 'Projections',
      url: 'https://www.icsm.gov.au/education/fundamentals-mapping/projections',
      author: 'Intergovernmental Committee on Surveying and Mapping',
    },
    {
      title: 'Supported Map Projections',
      url: 'https://desktop.arcgis.com/en/arcmap/latest/map/projections/mercator.htm',
      author: 'ArcMap',
    },
    {
      title: 'Characteristics of Projections',
      url: 'https://www.e-education.psu.edu/geog486/node/675',
      author: 'PennState College of Earth and Mineral Sciences',
    }
  ]"
/>