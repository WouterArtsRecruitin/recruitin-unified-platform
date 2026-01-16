import { UnifiedHeader } from '@/app/components/UnifiedHeader';
import { User, Award, Briefcase, GraduationCap, Mail, Phone, Linkedin, MapPin, TrendingUp, Users, Target } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  const skills = [
    'Sourcing & Procurement',
    'Contract Management',
    'Leveranciersmanagement',
    'Interim Management',
    'Alliance Management',
    'Change Management',
    'Strategisch Advies',
    'Stakeholder Management'
  ];

  const experience = [
    {
      company: 'S&PS BV',
      role: 'Eigenaar & Founder',
      period: '2015 - Heden',
      description: 'Advisering en implementatie van sourcing & procurement strategieën voor diverse organisaties.'
    },
    {
      company: 'Vitens',
      role: 'Senior Sourcing Consultant',
      period: '2012 - 2015',
      description: 'Optimalisatie van inkoopprocessen en leveranciersrelaties binnen de watersector.'
    },
    {
      company: 'Alliander',
      role: 'Contract Manager',
      period: '2008 - 2012',
      description: 'Contractmanagement en supplier relationship management in de energiesector.'
    }
  ];

  const certifications = [
    'NEVI Level 4 (Strategisch Inkoper)',
    'Certified Supply Chain Professional (CSCP)',
    'PRINCE2 Practitioner',
    'Agile Scrum Master'
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <UnifiedHeader />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#8B6F6F] to-[#6B5252] pt-32 pb-24 px-5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="max-w-[600px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-[42px] text-white leading-tight font-semibold max-md:text-[32px]">
                    Frank Lenting
                  </h1>
                  <p className="text-[18px] text-white/80">Eigenaar S&PS BV</p>
                </div>
              </div>
              
              <p className="text-[20px] mb-6 text-white/90 leading-relaxed max-md:text-[18px]">
                Specialist in Sourcing & Procurement met meer dan 15 jaar ervaring in het oplossen van complexe inrichtingsvraagstukken.
              </p>
              
              <div className="flex gap-4 flex-wrap">
                <a 
                  href="#contact" 
                  className="flex items-center gap-2 bg-[#4A7C9E] text-white px-6 py-3 text-[16px] font-semibold rounded transition-all hover:bg-[#3A6C8E] hover:shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  <span>Neem Contact Op</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/franklenting" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 text-[16px] font-semibold rounded transition-all hover:bg-white/30 hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="w-72 h-72 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl">
                  <User className="w-32 h-32 text-white/40" />
                </div>
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="text-[32px] font-bold text-[#8B6F6F]">15+</div>
                  <div className="text-[12px] text-gray-600">Jaar ervaring</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="text-[32px] font-bold text-[#4A7C9E]">50+</div>
                  <div className="text-[12px] text-gray-600">Projecten</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Over Mij Section */}
      <div className="py-20 px-5 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Bio */}
            <div className="lg:col-span-2">
              <h2 className="text-[32px] font-semibold text-[#1a1a1a] mb-6">Over Mij</h2>
              <div className="space-y-4 text-[16px] text-[#666666] leading-relaxed">
                <p>
                  Als eigenaar van S&PS BV help ik organisaties al meer dan 15 jaar bij het optimaliseren van hun sourcing en procurement processen. Mijn passie ligt in het oplossen van complexe inrichtingsvraagstukken waarbij verschillende partijen moeten samenwerken.
                </p>
                <p>
                  Mijn aanpak is pragmatisch en resultaatgericht. Ik geloof in het creëren van duurzame samenwerkingen tussen organisaties en hun leveranciers, waarbij wederzijds begrip en transparantie centraal staan.
                </p>
                <p>
                  Door de jaren heen heb ik gewerkt met verschillende toonaangevende organisaties zoals Vitens, Alliander, Schiphol, Achmea en Manpower. Deze ervaring heeft mij een breed perspectief gegeven op de uitdagingen waar organisaties mee te maken hebben.
                </p>
                <p>
                  Wat mij onderscheidt is mijn vermogen om strategisch te denken en tegelijkertijd praktisch te blijven in de uitvoering. Ik combineer diepgaande vakkennis met sterke communicatieve vaardigheden, waardoor ik effectief kan schakelen tussen verschillende stakeholders.
                </p>
              </div>

              {/* Contact Info */}
              <div id="contact" className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-4">Contact Gegevens</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#8B6F6F] rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[14px] text-gray-600">Telefoon</div>
                      <a href="tel:+31613072174" className="text-[16px] font-medium text-[#1a1a1a] hover:text-[#8B6F6F]">
                        +31 6 13072174
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#8B6F6F] rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[14px] text-gray-600">E-mail</div>
                      <a href="mailto:frank@snps.nl" className="text-[16px] font-medium text-[#1a1a1a] hover:text-[#8B6F6F]">
                        frank@snps.nl
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#8B6F6F] rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[14px] text-gray-600">Locatie</div>
                      <div className="text-[16px] font-medium text-[#1a1a1a]">
                        Nederland
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Skills */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-[#8B6F6F]" />
                  <h3 className="text-[18px] font-semibold text-[#1a1a1a]">Expertise</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#8B6F6F]/10 text-[#8B6F6F] text-[13px] font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-[#4A7C9E]" />
                  <h3 className="text-[18px] font-semibold text-[#1a1a1a]">Certificeringen</h3>
                </div>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#4A7C9E] rounded-full mt-2"></div>
                      <span className="text-[14px] text-[#666666]">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-[#8B6F6F] to-[#6B5252] rounded-lg p-6 text-white">
                <h3 className="text-[18px] font-semibold mb-4">In Cijfers</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-[32px] font-bold">15+</div>
                    <div className="text-[14px] text-white/80">Jaar ervaring</div>
                  </div>
                  <div>
                    <div className="text-[32px] font-bold">50+</div>
                    <div className="text-[14px] text-white/80">Projecten afgerond</div>
                  </div>
                  <div>
                    <div className="text-[32px] font-bold">5+</div>
                    <div className="text-[14px] text-white/80">Sectoren</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Werkervaring Section */}
      <div className="py-20 px-5 bg-gray-50">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-6 h-6 text-[#8B6F6F]" />
            <h2 className="text-[32px] font-semibold text-[#1a1a1a]">Werkervaring</h2>
          </div>
          
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-[20px] font-semibold text-[#1a1a1a]">{exp.role}</h3>
                    <p className="text-[16px] text-[#8B6F6F] font-medium">{exp.company}</p>
                  </div>
                  <span className="text-[14px] text-gray-600 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-[15px] text-[#666666] leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Werkwijze Section */}
      <div className="py-20 px-5 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-semibold text-[#1a1a1a] mb-4">Mijn Werkwijze</h2>
            <p className="text-[18px] text-[#666666] max-w-[700px] mx-auto">
              Gestructureerd, pragmatisch en altijd met focus op duurzame resultaten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B6F6F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3">Samenwerking</h3>
              <p className="text-[15px] text-[#666666] leading-relaxed">
                Ik geloof in het bouwen van sterke relaties en werk nauw samen met alle stakeholders om tot optimale oplossingen te komen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4A7C9E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3">Resultaatgericht</h3>
              <p className="text-[15px] text-[#666666] leading-relaxed">
                Focus op meetbare resultaten en tastbare verbeteringen die bijdragen aan de strategische doelstellingen van de organisatie.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B6F6F] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3">Continue Verbetering</h3>
              <p className="text-[15px] text-[#666666] leading-relaxed">
                Blijvend zoeken naar optimalisaties en nieuwe mogelijkheden om waarde toe te voegen aan procurement processen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-5 bg-gradient-to-r from-[#8B6F6F] to-[#6B5252]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[36px] font-semibold text-white mb-6">
            Laten we in contact komen
          </h2>
          <p className="text-[18px] text-white/90 mb-8">
            Heeft u een vraagstuk waar u hulp bij nodig heeft? Neem gerust contact op voor een vrijblijvend gesprek.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="tel:+31613072174"
              className="flex items-center gap-2 bg-white text-[#6B5252] px-8 py-4 text-[16px] font-semibold rounded transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Bel Direct</span>
            </a>
            <a 
              href="mailto:frank@snps.nl"
              className="flex items-center gap-2 bg-[#4A7C9E] text-white px-8 py-4 text-[16px] font-semibold rounded transition-all hover:bg-[#3A6C8E] hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <span>Stuur E-mail</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8 px-5">
        <div className="max-w-[1100px] mx-auto text-center">
          <div className="mb-4">
            <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-4 py-2 rounded inline-block">
              <span className="text-white font-semibold text-[16px] tracking-wide">S&P SERVICES</span>
            </div>
          </div>
          <p className="text-gray-400 text-[14px]">
            © {new Date().getFullYear()} S&PS BV. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </div>
  );
}