import React from 'react'
import styled from 'styled-components'
import H2 from '../components/headers/H2'
import Layout from '../components/layout'
import Project from '../components/Project'

import img from '../images/projects2.png'
import windows from '../images/windows.png'

/* zółty #f3ba0c */

const StyledProjects = styled.article`
  margin-top: 40px;
  background-color: rgb(194, 194, 206);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const StyledDescription = styled.p`
  margin-top: 30px;
  width: 90%;
`

const StyledImg = styled.img`
  width: 200px;
  margin-top: 30px;
`

const Projects = () => {
  const projectsData = [
    {
      key: 0,
      title: 'Windows',
      author: 'Razem',
      img: windows,
      content:
        'Jest to nasz pierwszy wspólny projekt, czyli klasyczny windows. Przenoszenie ikon, pasek zadań z zegarkiem i menu start otwierające się okna z połączonymi ściezkami - to wszystko jest tutaj. Projekt jest oparty na reactcie, ale nie zabrakło tam tez styled-components czy context-api.',
      link: 'https://github.com/superkacper4/windows',
    },
    {
      key: 1,
      title: 'Windows',
      author: 'Razem',
      img: windows,
      content:
        'Jest to nasz pierwszy wspólny projekt, czyli klasyczny windows. Przenoszenie ikon, pasek zadań z zegarkiem i menu start otwierające się okna z połączonymi ściezkami - to wszystko jest tutaj. Projekt jest oparty na reactcie, ale nie zabrakło tam tez styled-components czy context-api.',
      link: 'https://github.com/superkacper4/windows',
    },
  ]

  const projectArr = projectsData.map(project => (
    <Project
      key={project.key}
      title={project.title}
      author={project.author}
      img={project.img}
      content={project.content}
      link={project.link}
    />
  ))
  return (
    <Layout>
      <StyledProjects>
        <H2>Nasze projekty</H2>
        <StyledImg src={img} alt="" />
        <StyledDescription>
          Jest to zbiór naszych wspólnych jak i samodzielnych projektów. Przedstawione tutaj
          projekty nie są wszystkimi projektami naszej firmy jak i jej pracowników, jednak
          postaraliśmy się wybrać te najbardziej interesujące.
        </StyledDescription>
        {projectArr}
      </StyledProjects>
    </Layout>
  )
}

export default Projects
