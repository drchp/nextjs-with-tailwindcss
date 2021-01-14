import Nav from '../components/nav'

export default function About() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          This is the about page.
        </h1>
      </div>
    </div>
  )
}
