import Icon from '@ant-design/icons'
import { FaFileExcel, FaFilePdf, FaFilePowerpoint, FaFileWord, FaFirstAid, FaHome, FaMapMarkerAlt, FaMicrophone, FaRegAddressBook, FaTools, FaTree, FaVideo } from 'react-icons/fa'
import { GoRadioTower } from 'react-icons/go'
import { Collapse, Space, Typography } from 'antd'
import { S3Link } from './components/S3'
import { ReactNode } from 'react'
import PopoutLink from './components/PopoutLink'

const { Title } = Typography

type TrainingLink = { title: string, href: string, icon?: ReactNode }
type TrainingItem = string | TrainingLink
type Role = { 
  title: string
  files: TrainingItem[]
  icon?: ReactNode
  pathPrefix: string
}

const isTrainingLink = (item: TrainingItem): item is TrainingLink => {
  const link = item as TrainingLink
  return link.title !== undefined && link.href !== undefined
}

export default function CallCenterTrainingMaterials() {
  const roles: Role[] = [
    {
      title: 'General',
      pathPrefix: 'command-center',
      files: [
        "Communication council assistance to stake president_Disaster Response 02-11-2022 (1).pdf",
        "Disaster Relief Partnership with Govt.pptx",
        "Emergency Order form truck supplies Interactive - 09-06-17.pdf",
        "Emergency Outreach PDF (leave behind with Govt officials).pdf",
        "Emergency Preparation and Response -  Community Presentation 01-10-2022.pptx",
        "Emergency Response Detailed training 01-27-2022 Harding standard.pptx",
        "Incoming Sister Stake Expectations & Instructions 01-04-2022 MSH  Comments.docx",
        "Info for arriving crews.docx",
        "NASE Area Disaster Response Safety Guidance 04-07-2021 FINAL.pdf",
        "NASE Area Emergency Response Committee (AERC).pdf",
        "Service Ideas for Stake Presidents for those not on work  teams.docx",
        "Share Your Experience - Disaster Relief Volunteer Flyer.pdf",
        "Sister Stake Responsibilities.docx",
        "Stake ECS Recommended Gear 02-27-2020 Final.docx",
        "Stake Emergency Council Response guidelines.pdf",
        "Temporal-Preparedness-Guide-NASE-Area-Guide.pdf",
        "Work Crew basics.pptx",
      ]
    },
    {
      title: 'Chainsaw Director',
      icon: <Icon component={FaTree} />,
      pathPrefix: 'command-center/positions/chainsaw',
      files: [
        'Chainsaw Tracker.xlsx',
      ]
    },
    {
      title: 'Crisis Cleanup Director',
      icon: <Icon component={FaMapMarkerAlt} />,
      pathPrefix: 'command-center/positions/crisis-cleanup',
      files: [
        "Crisis Cleanup Summary.docx",
        "Data after weekend is over.docx",
        "Google Spreadsheet case log.xlsx",
        "HelpingHands-CommandCenterReport-Template.xlsx",
        "Work Order Assessment form.pdf",
        { title: "Work Order Distribution for Command Center Staff", href: "https://www.youtube.com/watch?v=WnRuH7YMd4k", icon: <Icon component={FaVideo} /> },
        { title: "Dialpad Tutorial for Command Center Staff", href: "https://www.youtube.com/watch?v=j0uNc8HvZrE", icon: <Icon component={FaVideo} />},
      ]
    },
    {
      title: 'Emergency Communications Specialist (IT)',
      icon: <Icon component={GoRadioTower} />,
      pathPrefix: 'command-center/positions/emergency-communications',
      files: [
        'Stake ECS Recommended Gear 02-27-2020 Final.docx',
      ]
    },
    {
      title: 'Housing Director',
      icon: <Icon component={FaHome} />,
      pathPrefix: 'command-center/positions/housing',
      files: [
        'Example of camping plan-Cocoa Stake.pptx',
        { title: 'Shower Installation Instructions', href:'https://vimeo.com/460689734/f3f004e35c', icon: <Icon component={FaVideo} />}
      ],
    },
    {
      title: 'Registration Director',
      icon: <Icon component={FaRegAddressBook} />,
      pathPrefix: 'command-center/positions/registration',
      files: [
        'Work Crew Registration Form.pdf',
      ]
    },
    {
      title: 'Stake Communications (PA) Director',
      icon: <Icon component={FaMicrophone} />,
      pathPrefix: 'command-center/positions/stake-communications',
      files: [
        "NASE Communication Outreach - Disaster Response.pdf",
        "JustServe Overview of Disaster Response.pdf",
        {
          title: 'Communcation Disaster Relief Training',
          href: 'https://gcn.churchofjesuschrist.org/nase-pan/topics-all?lang=eng#:~:text=Disaster%20Response%20Training%20%26%20Resources',
          icon: <Icon component={FaMicrophone} />
        },
        {
          title: 'Name Reference Guid: Disaster Relief Efforts',
          href: 'https://docs.google.com/presentation/d/1tBV3ileNdq5XUuyB3vH7SxY4udRwaLYl9VQks55prmQ/edit?usp=sharing',
          icon: <Icon component={FaFilePowerpoint} />
        }
      ]
    },
    {
      title: 'Storehouse Staging Director (Supplies)',
      icon: <Icon component={FaTools} />,
      pathPrefix: 'command-center/positions/supplies',
      files: [
        "Command Center Supplies - Setup and Close Out Process  02-01-2022.docx",
        "Command Center Weekly Inventory Process.docx",
        "Emergency Order Interactive - 04-28-2022.pdf",
        "Supply Yard Training.pptx",
      ]
    },
    {
      title: 'First Aid Director',
      icon: <Icon component={FaFirstAid} />,
      pathPrefix: 'command-center/positions/first-aid',
      files: [
        "First Aid Director handout.pdf"
      ]
    }
  ]

  const icons = {
    'pdf': FaFilePdf,
    'doc': FaFileWord,
    'docx': FaFileWord,
    'ppt': FaFilePowerpoint,
    'pptx': FaFilePowerpoint,
    'xls': FaFileExcel,
    'xlsx': FaFileExcel,
  }
  const getIcon = (file: string) => {
    const ext = file.substring(file.lastIndexOf('.') + 1)
    if (Object.keys(icons).includes(ext)) {
      const result = icons[ext as keyof typeof icons]
      return result
    }
  }


  return <>
    <Title level={2}>Command Center Training Materials</Title>

    <Collapse>
      {
        roles.map(role => <Collapse.Panel header={<Space>{role.icon}{role.title}</Space>} key={role.title}>
          <Space direction="vertical">
            {
              role.files.map(file =>
                <Space>
                  {isTrainingLink(file)
                    ? <PopoutLink href={file.href}>
                      <Space>
                        {file.icon}
                        {file.title}
                      </Space>
                    </PopoutLink>
                    : <S3Link path={`${role.pathPrefix}/${file}`}>
                      <Space>
                        <Icon component={getIcon(file)} />
                        {file}
                      </Space>
                    </S3Link>
                  }
                </Space>)
            }
          </Space>
        </Collapse.Panel>)
      }
    </Collapse>
  </>
}