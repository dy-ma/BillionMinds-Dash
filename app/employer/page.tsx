const employers = [
  { name: "Maven Research", slug: "mavenresearch" },
  { name: "Verinovum", slug: "verinovum" },
  { name: "Tealium", slug: "tealium" },
  { name: "Gusto", slug: "gusto" },
  { name: "AATS", slug: "aats" },
  { name: "Sunny Period", slug: "sunnyperiod" },
  { name: "Kaufer DMC", slug: "kauferdmc" },
  { name: "Linde Engineering", slug: "lindeengineering" },
  { name: "Cox", slug: "cox" },
  { name: "Sage Bionetworks", slug: "sagebionetworks" },
  { name: "Archbright", slug: "archbright" },
  { name: "BillionMinds", slug: "billionminds" },
  { name: "Cogwheel Marketing", slug: "cogwheelmarketing" },
]

export default function Employer() {
  const employerList = employers.map(employer =>
    <li key={employer.slug} className="hover:scale-105 duration-100">
      <a href={"/employer/" + employer.slug}>
        {employer.name}
      </a>
    </li>
  )
  return (
    <div
      style={{
        backgroundImage: 'url("bg.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '93vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ul className="text-black text-2xl font-bold">
        {employerList}
      </ul>
    </div>
  )
}