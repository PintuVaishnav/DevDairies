import Header from "@/layouts/header-layout";

function About() {
  const icons = [
    "https://img.icons8.com/fluency/48/docker.png",
    "https://img.icons8.com/color/96/kubernetes.png",
    "https://img.icons8.com/color/96/terraform.png",
    "https://img.icons8.com/color/96/jenkins.png",
    "https://i.pinimg.com/736x/2b/7c/1b/2b7c1bd0f72f883cb7f4bdd0d4e910bb.jpg",
    "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-data-visualization-and-monitoring-with-support-for-graphite-and-influxdb-logo-color-tal-revivo.png"
  ];
  const icons2 = [
  "https://img.icons8.com/color/96/prometheus-app.png",
    "https://img.icons8.com/color/96/ansible.png",
    "https://img.icons8.com/color/96/amazon-web-services.png",
    "https://img.icons8.com/external-bearicons-blue-bearicons/64/external-Helm-navigation-and-maps-bearicons-blue-bearicons.png",
    "https://img.icons8.com/color/96/gitlab.png"
  ];
    

  return (
    <div className="relative w-full min-h-screen bg-light dark:bg-dark">
      <Header />
      

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        
        <div className="relative w-[88%] max-w-6xl bg-white dark:bg-dark rounded-xl shadow-lg p-8 flex items-center justify-between overflow-hidden gap-x-14">
{/* Left floating icons */}
          <div className="hidden md:flex flex-row gap-x-8">
            <div className="relative h-[500px] overflow-hidden flex flex-col gap-6 animate-moveVerticalGroup">
              {icons.map((src, index) => (
                <img key={index} src={src} alt="" className="w-[4.5rem] h-[4.5rem] opacity-70 rounded-lg object-contain" />
              ))}
            </div>
            <div className="relative h-[500px] overflow-hidden flex flex-col gap-6 animate-moveVerticalGroupReverse">
              {icons2.map((src, index) => (
                <img key={index} src={src} alt="" className="w-[4.5rem] h-[4.5rem] opacity-70 rounded-lg object-contain" />
              ))}
            </div>
          </div>

          
          {/* About content */}
          <div className="text-center px-8 flex-1">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">About Me</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Hey 👋 I’m <span className="font-semibold text-blue-600">Vaishnav Yejju</span>, a tech explorer with a deep interest in
              <span className="font-medium text-blue-500"> Cloud Infrastructure</span> and
              <span className="font-medium text-blue-500"> DevOps practices</span>. I’m passionate about building, deploying,
              and automating projects using modern cloud-native technologies.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">What I Work On</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mb-10 space-y-2 leading-relaxed text-left">
              <li>Dockerizing apps and deploying them on Kubernetes clusters (AWS EKS, GCP GKE)</li>
              <li>Setting up CI/CD pipelines using GitHub Actions and integrating container builds</li>
              <li>Cloud deployments, server provisioning, and infrastructure automation</li>
              <li>DevOps tools like Terraform, Ansible, Prometheus, and Grafana</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Why This Blog</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I use this space to document my DevOps projects, cloud setups, guides, walkthroughs, and productivity tips
              that help me and others work smarter in the cloud.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Let’s Connect</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Got a cool Cloud or DevOps idea? Reach out on
              <a href="https://www.linkedin.com/in/vaishnav-yejju" target="_blank" className="text-blue-600 ml-1 hover:underline">
                LinkedIn
              </a>.
            </p>
          </div>

          {/* Right floating icons */}
          <div className="hidden md:flex flex-row gap-x-8">
            <div className="relative h-[500px] overflow-hidden flex flex-col gap-6 animate-moveVerticalGroup">
              {icons.map((src, index) => (
                <img key={index} src={src} alt="" className="w-[4.5rem] h-[4.5rem] opacity-70 rounded-lg object-contain" />
              ))}
            </div>
            <div className="relative h-[500px] overflow-hidden flex flex-col gap-6 animate-moveVerticalGroupReverse">
              {icons2.map((src, index) => (
                <img key={index} src={src} alt="" className="w-[4.5rem] h-[4.5rem] opacity-70 rounded-lg object-contain" />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
