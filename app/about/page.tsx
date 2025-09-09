import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Heart, Lightbulb, Shield, Linkedin, Twitter, Mail } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 12 years in digital marketing, Sarah has led campaigns for Fortune 500 companies and startups alike. Her strategic vision drives our agency's success.",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
      expertise: ["Strategy", "Leadership", "Growth Marketing"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@digitalpro.com",
      },
    },
    {
      name: "Michael Chen",
      role: "Head of SEO",
      bio: "Michael is our SEO wizard with 8+ years of experience. He's helped over 200 businesses achieve first-page rankings and dominate their markets.",
      image: "/placeholder.svg?height=300&width=300&text=Michael+Chen",
      expertise: ["SEO", "Technical SEO", "Analytics"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@digitalpro.com",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      bio: "Emily brings brands to life through compelling content and stunning visuals. Her creative campaigns have won multiple industry awards.",
      image: "/placeholder.svg?height=300&width=300&text=Emily+Rodriguez",
      expertise: ["Creative Strategy", "Content Creation", "Brand Design"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@digitalpro.com",
      },
    },
    {
      name: "David Park",
      role: "PPC Specialist",
      bio: "David is a certified Google and Facebook ads expert who has managed over $5M in ad spend, consistently delivering exceptional ROI for our clients.",
      image: "/placeholder.svg?height=300&width=300&text=David+Park",
      expertise: ["PPC", "Google Ads", "Facebook Ads"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@digitalpro.com",
      },
    },
    {
      name: "Lisa Thompson",
      role: "Social Media Manager",
      bio: "Lisa has built communities of millions across social platforms. Her engaging content strategies have transformed brands into social media powerhouses.",
      image: "/placeholder.svg?height=300&width=300&text=Lisa+Thompson",
      expertise: ["Social Media", "Community Building", "Influencer Marketing"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@digitalpro.com",
      },
    },
    {
      name: "James Wilson",
      role: "Analytics Director",
      bio: "James turns data into actionable insights. His analytical approach has helped optimize campaigns that generated over $50M in client revenue.",
      image: "/placeholder.svg?height=300&width=300&text=James+Wilson",
      expertise: ["Analytics", "Data Science", "Conversion Optimization"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@digitalpro.com",
      },
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we implement is designed to deliver measurable results and ROI for our clients.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Our clients' success is our success. We treat every project as if it were our own business.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of digital trends and continuously innovate to give our clients a competitive edge.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description:
        "We believe in complete transparency with our clients, providing detailed reports and honest communication.",
    },
  ]

  const milestones = [
    { year: "2018", event: "DigitalPro Founded", description: "Started with a vision to transform digital marketing" },
    {
      year: "2019",
      event: "First 100 Clients",
      description: "Reached our first major milestone of 100 satisfied clients",
    },
    { year: "2021", event: "Award Recognition", description: "Won 'Digital Marketing Agency of the Year' award" },
    { year: "2022", event: "Team Expansion", description: "Grew to 50+ team members across multiple specializations" },
    { year: "2023", event: "Global Reach", description: "Expanded services to clients in 25+ countries worldwide" },
    { year: "2024", event: "500+ Projects", description: "Successfully completed over 500 digital marketing projects" },
  ]

  const testimonials = [
    {
      quote:
        "DigitalPro doesn't just deliver results; they become true partners in your business growth. Their strategic approach and dedication are unmatched.",
      author: "Jennifer Martinez",
      company: "TechInnovate Solutions",
      role: "CEO",
    },
    {
      quote:
        "Working with this team has been transformative for our business. They understand our industry and consistently exceed expectations.",
      author: "Robert Kim",
      company: "Global Retail Group",
      role: "Marketing Director",
    },
    {
      quote:
        "The level of expertise and professionalism at DigitalPro is exceptional. They've helped us achieve growth we never thought possible.",
      author: "Amanda Foster",
      company: "HealthTech Innovations",
      role: "Founder",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  We're More Than an Agency,
                  <span className="text-primary"> We're Your Growth Partners</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Founded in 2018 with a mission to democratize digital marketing excellence, we've helped over 500
                  businesses transform their online presence and achieve sustainable growth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=500&width=500&text=Team+Collaboration"
                  alt="DigitalPro Team"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                DigitalPro was born from a simple observation: too many businesses were struggling with digital
                marketing agencies that promised the world but delivered generic, cookie-cutter solutions. We knew there
                had to be a better way.
              </p>
              <p>
                Our founder, Sarah Johnson, had spent over a decade working with both Fortune 500 companies and scrappy
                startups. She saw firsthand how the right digital marketing strategy could transform a business
                overnight, but also how the wrong approach could waste precious resources and time.
              </p>
              <p>
                That's why we built DigitalPro differently. We don't just execute campaigns; we become strategic
                partners invested in your long-term success. Every strategy is custom-built, every campaign is
                data-driven, and every result is measurable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              These principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From a small startup to an award-winning agency, here are the key milestones in our growth story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card className="border-border">
                        <CardContent className="p-6">
                          <div className="space-y-2">
                            <Badge className="bg-primary text-primary-foreground">{milestone.year}</Badge>
                            <h3 className="text-lg font-semibold text-foreground">{milestone.event}</h3>
                            <p className="text-muted-foreground">{milestone.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our diverse team of digital marketing experts brings together decades of experience and a passion for
              driving results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{member.bio}</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-3 pt-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Don't just take our word for it. Here's what our clients have to say about working with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Work with Our Team?</h2>
            <p className="text-xl opacity-90 text-pretty">
              Let's discuss how our expertise and passion for digital marketing can help transform your business. We're
              excited to become your growth partners.
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
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
