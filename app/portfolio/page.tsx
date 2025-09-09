import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, TrendingUp, Users, Search, Megaphone, Target, BarChart3 } from "lucide-react"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "TechStart Inc. - Complete Digital Transformation",
      category: "Full Service",
      client: "TechStart Inc.",
      industry: "Technology",
      duration: "12 months",
      services: ["SEO", "PPC", "Content Marketing", "Social Media"],
      description:
        "Complete digital marketing overhaul for a growing tech startup, resulting in 300% traffic increase and 250% lead generation improvement.",
      image: "/placeholder.svg?height=400&width=600&text=TechStart+Digital+Transformation",
      results: [
        { metric: "Organic Traffic", improvement: "+300%" },
        { metric: "Lead Generation", improvement: "+250%" },
        { metric: "Conversion Rate", improvement: "+180%" },
        { metric: "Brand Awareness", improvement: "+400%" },
      ],
      testimonial: "DigitalPro transformed our entire online presence. The results exceeded our expectations.",
      featured: true,
    },
    {
      id: 2,
      title: "E-commerce Plus - PPC Campaign Optimization",
      category: "PPC Advertising",
      client: "E-commerce Plus",
      industry: "E-commerce",
      duration: "6 months",
      services: ["PPC", "Analytics"],
      description:
        "Optimized Google Ads and Facebook campaigns for an e-commerce retailer, achieving exceptional ROI and customer acquisition.",
      image: "/placeholder.svg?height=400&width=600&text=E-commerce+PPC+Campaign",
      results: [
        { metric: "ROAS", improvement: "+320%" },
        { metric: "Cost per Acquisition", improvement: "-45%" },
        { metric: "Click-through Rate", improvement: "+180%" },
        { metric: "Conversion Rate", improvement: "+220%" },
      ],
      testimonial: "Our PPC campaigns have never performed better. The ROI is incredible.",
      featured: false,
    },
    {
      id: 3,
      title: "Local Bistro - Social Media Growth",
      category: "Social Media",
      client: "Local Bistro",
      industry: "Food & Beverage",
      duration: "8 months",
      services: ["Social Media", "Content Marketing"],
      description:
        "Built a strong social media presence for a local restaurant, creating engaging content and building a loyal community.",
      image: "/placeholder.svg?height=400&width=600&text=Local+Bistro+Social+Media",
      results: [
        { metric: "Followers", improvement: "+500%" },
        { metric: "Engagement Rate", improvement: "+280%" },
        { metric: "Foot Traffic", improvement: "+150%" },
        { metric: "Online Orders", improvement: "+300%" },
      ],
      testimonial: "Our social media presence has completely transformed our business.",
      featured: false,
    },
    {
      id: 4,
      title: "HealthCare Pro - SEO Domination",
      category: "SEO",
      client: "HealthCare Pro",
      industry: "Healthcare",
      duration: "10 months",
      services: ["SEO", "Content Marketing"],
      description:
        "Achieved first-page rankings for competitive healthcare keywords, dramatically increasing organic visibility and patient inquiries.",
      image: "/placeholder.svg?height=400&width=600&text=HealthCare+SEO+Success",
      results: [
        { metric: "Keyword Rankings", improvement: "+400%" },
        { metric: "Organic Traffic", improvement: "+350%" },
        { metric: "Patient Inquiries", improvement: "+280%" },
        { metric: "Local Visibility", improvement: "+500%" },
      ],
      testimonial: "We now dominate search results in our area. Patient inquiries have skyrocketed.",
      featured: true,
    },
    {
      id: 5,
      title: "Fashion Forward - Influencer Marketing",
      category: "Social Media",
      client: "Fashion Forward",
      industry: "Fashion",
      duration: "4 months",
      services: ["Social Media", "Influencer Marketing"],
      description:
        "Launched successful influencer partnerships and social campaigns for a fashion brand, building brand awareness and driving sales.",
      image: "/placeholder.svg?height=400&width=600&text=Fashion+Influencer+Campaign",
      results: [
        { metric: "Brand Awareness", improvement: "+450%" },
        { metric: "Social Engagement", improvement: "+380%" },
        { metric: "Sales Revenue", improvement: "+200%" },
        { metric: "Influencer Reach", improvement: "+600%" },
      ],
      testimonial: "The influencer campaigns created massive buzz around our brand.",
      featured: false,
    },
    {
      id: 6,
      title: "B2B Solutions - Lead Generation",
      category: "Content Marketing",
      client: "B2B Solutions",
      industry: "B2B Services",
      duration: "9 months",
      services: ["Content Marketing", "SEO", "PPC"],
      description:
        "Developed comprehensive content strategy and lead generation system for B2B service provider, resulting in qualified lead pipeline.",
      image: "/placeholder.svg?height=400&width=600&text=B2B+Lead+Generation",
      results: [
        { metric: "Qualified Leads", improvement: "+400%" },
        { metric: "Content Engagement", improvement: "+250%" },
        { metric: "Sales Pipeline", improvement: "+300%" },
        { metric: "Cost per Lead", improvement: "-40%" },
      ],
      testimonial: "Our sales team can't keep up with all the qualified leads coming in.",
      featured: false,
    },
  ]

  const categories = ["All", "Full Service", "SEO", "PPC Advertising", "Social Media", "Content Marketing"]

  const getServiceIcon = (service: string) => {
    switch (service) {
      case "SEO":
        return Search
      case "PPC":
        return Target
      case "Social Media":
        return Megaphone
      case "Content Marketing":
        return Users
      case "Analytics":
        return BarChart3
      default:
        return TrendingUp
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Our Success
                <span className="text-primary"> Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Discover how we've helped businesses across industries achieve remarkable growth through strategic
                digital marketing campaigns and innovative solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">250%</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "border-border hover:bg-muted"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Featured</Badge>
                  )}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {item.services.map((service) => {
                      const IconComponent = getServiceIcon(service)
                      return (
                        <Badge key={service} variant="secondary" className="text-xs">
                          <IconComponent className="w-3 h-3 mr-1" />
                          {service}
                        </Badge>
                      )
                    })}
                  </div>
                  <CardTitle className="text-lg text-card-foreground leading-tight">{item.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{item.client}</span>
                    <span>{item.duration}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </CardDescription>

                  <div className="grid grid-cols-2 gap-3">
                    {item.results.slice(0, 4).map((result, index) => (
                      <div key={index} className="text-center p-2 bg-muted/50 rounded-lg">
                        <div className="text-lg font-bold text-primary">{result.improvement}</div>
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">"{item.testimonial}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our data-driven approach consistently delivers exceptional results for businesses of all sizes and
              industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Average Traffic Increase",
                value: "285%",
                description: "Across all SEO campaigns",
              },
              {
                icon: Target,
                title: "Average ROAS",
                value: "4.2x",
                description: "For PPC advertising campaigns",
              },
              {
                icon: Users,
                title: "Lead Generation Improvement",
                value: "320%",
                description: "Through content marketing",
              },
              {
                icon: Megaphone,
                title: "Social Engagement Growth",
                value: "450%",
                description: "Across social media campaigns",
              },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="font-semibold text-foreground">{stat.title}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl opacity-90 text-pretty">
              Join the hundreds of businesses that have transformed their digital presence with our proven strategies.
              Let's discuss how we can achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
