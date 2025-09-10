import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, Megaphone, BarChart3, Target, Users, CheckCircle, ArrowRight, Globe } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Dominate search results and drive organic traffic with our comprehensive SEO strategies.",
      features: [
        "Keyword Research & Analysis",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Link Building Campaigns",
        "Local SEO for Businesses",
        "SEO Performance Tracking",
      ],
     // pricing: "Starting at $1,500/month",
      popular: false,
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage your audience across all major social platforms.",
      features: [
        "Social Media Strategy Development",
        "Content Creation & Curation",
        "Community Management",
        "Social Media Advertising",
        "Influencer Partnerships",
        "Social Analytics & Reporting",
      ],
     // pricing: "Starting at $1,200/month",
      popular: true,
    },
    {
      icon: Target,
      title: "PPC Advertising",
      description: "Maximize ROI with targeted pay-per-click campaigns across Google and social media.",
      features: [
        "Google Ads Management",
        "Facebook & Instagram Ads",
        "LinkedIn Advertising",
        "Campaign Optimization",
        "A/B Testing & Analytics",
        "Conversion Tracking Setup",
      ],
    //  pricing: "Starting at $2,000/month",
      popular: false,
    },
    {
      icon: Users,
      title: "Content Marketing",
      description: "Create compelling content that resonates with your audience and drives conversions.",
      features: [
        "Content Strategy Development",
        "Blog Writing & Management",
        "Video Content Creation",
        "Infographic Design",
        "Email Newsletter Content",
        "Content Performance Analysis",
      ],
      // pricing: "Starting at $1,800/month",
      popular: false,
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build responsive, high-converting websites optimized for performance and user experience.",
      features: [
        "Custom Website Design",
        "E-commerce Development",
        "Mobile Optimization",
        "Website Speed Optimization",
        "CMS Integration",
        "Ongoing Maintenance",
      ],
    //  pricing: "Starting at $5,000 one-time",
      popular: false,
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to measure performance and optimize your marketing campaigns.",
      features: [
        "Google Analytics Setup",
        "Custom Dashboard Creation",
        "Performance Tracking",
        "ROI Analysis",
        "Monthly Reporting",
        "Strategic Recommendations",
      ],
    //  pricing: "Starting at $800/month",
      popular: false,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      quote: "DigitalPro transformed our online presence. Our organic traffic increased by 300% in just 6 months!",
      service: "SEO Optimization",
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      quote: "Their PPC campaigns delivered exceptional ROI. We saw a 250% increase in qualified leads.",
      service: "PPC Advertising",
    },
    {
      name: "Emily Rodriguez",
      company: "Local Bistro",
      quote: "The social media strategy they created helped us build a loyal community of 50K+ followers.",
      service: "Social Media Marketing",
    },
  ]

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer:
        "Results vary by service type. PPC campaigns can show immediate results, while SEO typically takes 3-6 months to see significant improvements. Social media and content marketing usually show engagement improvements within 4-8 weeks.",
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer:
        "Yes, we work with startups, small businesses, and enterprise companies. Our strategies are tailored to your specific business size, industry, and budget requirements.",
    },
    {
      question: "What's included in your monthly reporting?",
      answer:
        "Our monthly reports include key performance metrics, campaign analysis, ROI calculations, competitive insights, and strategic recommendations for the following month.",
    },
    {
      question: "Can I customize my service package?",
      answer:
        "We offer flexible packages that can be customized based on your specific needs, goals, and budget. Contact us for a personalized consultation.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, all our clients receive dedicated account management, regular strategy sessions, and ongoing optimization to ensure continued success.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Comprehensive Digital Marketing
                <span className="text-primary"> Services</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                From SEO to social media, we offer end-to-end digital marketing solutions designed to grow your business
                and maximize your online presence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20"
              >
                {service.popular && (
                  <Badge className="absolute -top-2 left-4 bg-accent text-accent-foreground">Most Popular</Badge>
                )}
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-card-foreground mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

              <!--    <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-primary">{service.pricing}</span>
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Learn More</Button>
                  </div> -->
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We follow a systematic approach to ensure your digital marketing campaigns deliver measurable results and
              sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description:
                  "We analyze your business, competitors, and target audience to create a tailored strategy.",
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Our experts develop a comprehensive digital marketing plan aligned with your goals.",
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute campaigns across chosen channels with precision and attention to detail.",
              },
              {
                step: "04",
                title: "Optimization & Reporting",
                description: "Continuous monitoring, optimization, and detailed reporting ensure maximum ROI.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      <Badge variant="secondary" className="mt-2">
                        {testimonial.service}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Get answers to common questions about our digital marketing services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl opacity-90 text-pretty">
              Let's discuss which services are right for your business. Get a free consultation and custom strategy
              proposal tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                View Pricing Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
