// Cross-product of services × service-area cities
// Produces 14 services × 10 cities = 140 combo objects
// Each combo becomes one indexable page at /{service-slug}-{city-slug}/

const services = require('./services.json');
const areas = require('./areas.json');

module.exports = function () {
  const combos = [];
  for (const service of services) {
    for (const area of areas) {
      combos.push({
        service: service,
        area: area,
        slug: `${service.slug}-${area.slug}`,
        title: `${service.title} in ${area.city}`,
        // SEO-friendly meta description that mixes service + city
        description: `${service.shortDesc} Built for ${area.city}, MA businesses. Book a free strategy call.`
      });
    }
  }
  return combos;
};
