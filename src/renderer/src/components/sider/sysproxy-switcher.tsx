import { Button, Card, CardBody, CardFooter, Switch } from '@nextui-org/react'
import { IoSettings } from 'react-icons/io5'

const SysproxySwitcher: React.FC = () => {
  return (
    <Card className="w-[50%] mr-1">
      <CardBody className="pb-1 pt-0 px-0">
        <div className="flex justify-between">
          <Button isIconOnly className="bg-transparent" variant="flat" color="default">
            <IoSettings color="default" className="text-lg" />
          </Button>
          <Switch size="sm" />
        </div>
      </CardBody>
      <CardFooter className="pt-1">
        <h3 className="select-none text-md font-bold">系统代理</h3>
      </CardFooter>
    </Card>
  )
}

export default SysproxySwitcher
