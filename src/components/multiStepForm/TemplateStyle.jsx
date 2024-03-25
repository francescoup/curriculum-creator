import LayoutSwitch from "../../atoms/LayoutSwitch";
import InputSelect from "../../atoms/InputSelect";
import ColorSwitch from "../../atoms/ColorSwitch";
import {
  fontFamily,
  color,
  colorsTitle,
  colorsSubtitle,
} from "../../data/optionsData";
import { usePersonalInfo } from "../../store/useGlobalStore";

const TemplateStyle = () => {
  const updateColorTitle = usePersonalInfo((s) => s.updateColorTitle);
  const updateColorSubTitle = usePersonalInfo((s) => s.updateColorSubTitle);
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="text-xl text-gray-50">Personalizzazioni</span>
      {/* <LayoutSwitch /> */}
      {/* <InputSelect label="font family" name="font family" options={color} /> */}
      <ColorSwitch
        onChange={updateColorTitle}
        title="Colore Titoli"
        colors={colorsTitle}
      />
      <ColorSwitch
        onChange={updateColorSubTitle}
        title="Colore sotto Titoli"
        colors={colorsSubtitle}
      />
    </div>
  );
};

export default TemplateStyle;
