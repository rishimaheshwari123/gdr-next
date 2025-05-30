import { Building2, Users, Award, TrendingUp, CheckCircle, Star } from "lucide-react"

const WhyUs = () => {
  const stats = [
    {
      number: "25+",
      label: "Completed Projects",
      sublabel: "& 3 Ongoing",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      number: "45+",
      label: "Team Members",
      sublabel: "Expert Professionals",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      number: "2005",
      label: "Since Established",
      sublabel: "Trust & Reliability",
      icon: Award,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
  ]

  const features = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Premium construction with attention to detail",
    },
    {
      icon: TrendingUp,
      title: "Market Leadership",
      description: "Leading real estate developer in the region",
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Committed to exceeding client expectations",
    },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Why Choose Us</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Building Dreams
            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Since 2005
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With decades of experience and a commitment to excellence, we've established ourselves as a trusted name in
            real estate development.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border ${stat.borderColor} ${stat.bgColor} backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10`}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl from-white/20 to-white/5"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Number */}
                  <div
                    className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300`}
                  >
                    {stat.number}
                  </div>

                  {/* Labels */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.sublabel}
                  </p>
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl from-transparent via-white/50 to-transparent"></div>
              </div>
            )
          })}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group text-center p-6 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-red-500/20 to-orange-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-300">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-red-500"></div>
            <span className="text-sm font-medium">Trusted by thousands of satisfied customers</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-red-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
