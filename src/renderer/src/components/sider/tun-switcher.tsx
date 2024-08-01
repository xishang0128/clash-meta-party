import { Button, Card, CardBody, CardFooter, Switch } from '@nextui-org/react'
import { TbDeviceIpadHorizontalBolt } from 'react-icons/tb'
import { useLocation, useNavigate } from 'react-router-dom'

const TunSwitcher: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Card
      className={`w-[50%] ml-1 ${location.pathname.includes('/tun') ? 'bg-primary' : ''}`}
      isPressable
      onPress={() => navigate('/tun')}
    >
      <CardBody className="pb-1 pt-0 px-0">
        <div className="flex justify-between">
          <Button isIconOnly className="bg-transparent" variant="flat" color="default">
            <TbDeviceIpadHorizontalBolt color="default" className="text-[24px] font-bold" />
          </Button>
          <Switch size="sm" />
        </div>
      </CardBody>
      <CardFooter className="pt-1">
        <h3 className="select-none text-md font-bold">虚拟网卡</h3>
      </CardFooter>
    </Card>
  )
}

export default TunSwitcher
