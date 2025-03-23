import styles from "@/styles/about/member.module.css"

export default function Members() {
  const teamMembers = [
    {
      name: "Laxman Bista",
      position: "Executive Director",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Laxman Bista",
      position: "Executive Director",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Laxman Bista",
      position: "Executive Director",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Laxman Bista",
      position: "Executive Director",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Laxman Bista",
      position: "Executive Director",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className={styles.main}>
      <div className={styles.teamContainer}>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.imageContainer}>
                  <div className={styles.placeholderImage}>
                    <div className={styles.sky}>
                      <div className={styles.cloud} style={{ left: "20%", top: "30%" }}></div>
                      <div className={styles.cloud} style={{ left: "60%", top: "40%" }}></div>
                    </div>
                    <div className={styles.hills}></div>
                  </div>
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberPosition}>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

