import Image from 'next/image'

import logoImage from '../assets/ifrdplogo.svg'
import anelogoImage from '../assets/anelogo.svg'
import jhpiegologoImage from '../assets/jhpiegologo.svg'
import wblogoImage from '../assets/wblogo.svg'
import learninglogoImage from '../assets/learninglogo.svg'
import dashboardgoImage from '../assets/dashboardlogo.svg'
import grievancelogoImage from '../assets/grievancelogo.svg'



import phoneImage from '../assets/phone.png'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='flex flex-row items-stretch w-full h-screen'>
      <main className='bg-white max-w-3xl p-14 '>

        <div>
        <Image src={logoImage} alt="" width={100} />
        <h1 className='py-6 font-black text-black text-4xl'>Mecanismo de Gestão de Queixas/Reclamações/Sugestões</h1>

        <div className='flex flex-row items-center'>
          {/* <div className='flex flex-row items-center rounded w-80 bg-[#202024] p-4'>
            <Image src={phoneImage} alt="" />
            <p className='pl-2.5'>
              <span className='font-thin text-white'>CALL CENTER </span>
              <strong className='font-black text-white'> | 99393 | 99494</strong>
            </p>
          </div> */}
          <Link
            href={'https://www.ane.gov.mz/'}
            rel="noopener noreferrer"
            className='rounded bg-slate-800 text-white p-4 h-[62px] w-[208px] m-3'
            type="button">
            Pagina ANE
          </Link>
        </div>

        {/* <p className='text-xs font-normal text-[#767676] py-3 max-w-lg'>Esta pagina é exclusiva para ter acesso ao ponto de situacao das queixas ou reclamacoes que possam surgir por durante a implementacao deste projecto </p> */}

        </div>

        
        <div className='flex-1 flex flew-row justify-evenly items-end content-end h-1/2 '>
          <Image src={anelogoImage} alt="" />
          <Image src={wblogoImage} alt="" />
          <Image src={jhpiegologoImage} alt="" />
        </div>
      </main>

      <main className='bg-[#3662D2] w-full flex flex-1 flex-col items-center justify-center'>
        <div className='flex flex-col'>
        <Link
            href={'https://ee.humanitarianresponse.info/x/PrunVS3a/'}
            className='rounded bg-[#4C4C4E] p-4 h-[62px] w-96 m-3 text-white'>
            <div className='flex flex-row items-center '>
              <Image
                src={grievancelogoImage}
                alt="dash"
                width={40}
              />
              <p className='pl-2.5 text-[12]'>Submeter Queixa/Reclamação/Sugestão</p>
            </div>
          </Link>
          <Link
            href={'https://app.powerbi.com/view?r=eyJrIjoiMzMzYmVmYjctZTFiZi00NTMwLWJhNDYtZTkwMDQzZjZjYzgzIiwidCI6IjI2ZWY3ZmQyLTJhN2YtNDEzNS1hMmU0LWRlOWFjZjE2OGIyYSIsImMiOjF9&pageName=ReportSection'}
            rel="noopener noreferrer"
            className='rounded bg-[#0E0E0F] p-4 h-[62px] w-96 m-3 text-white'>
            <div className='flex flex-row items-center '>
              <Image
                src={dashboardgoImage}
                alt="dash"
                width={35}
              />
              <p className='pl-2.5 text-lg'>Visualizar Dashboard</p>
            </div>
          </Link>


          {/* <button className='rounded bg-[#056839] p-4 h-[62px] w-96 m-3 text-white'>
            <div className='flex flex-row items-center '>
              <Image
                src={learninglogoImage}
                alt="dash"
                width={30}
              />
              <p className='pl-2.5 text-lg'>Cursos de Salvaguarda Social/VBG</p>
            </div>
          </button> */}
        </div>

        <div className='absolute bottom-0 grid grid-cols-2 bg-slate-50 font-bold'>
          <div className='p-5 flex flex-1 items-center rounded'>
            <p className=''>Tolerância Zero para a exploração e abuso sexual. Denuncie!</p> 
          </div>
          <div>
            <h1>Ligue Mahala</h1>
            <h2>84 9494 | 84 9393</h2>
            <p>Vodacom | Mcel</p>
            <h2>9 9393 | 9 9494</h2>
            <p>Movitel</p>
          </div>
        </div>
      </main>
    </div>
  )
}
