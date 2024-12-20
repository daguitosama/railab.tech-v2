import {
    ArrowPathIcon,
    ArrowTrendingUpIcon,
    CheckBadgeIcon,
    Cog6ToothIcon,
    ComputerDesktopIcon,
    CurrencyDollarIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";
import { useLangContext } from "~/lang/lang";

const headingEs = "Los Servicios que está buscando";
const headingEn = "The Services you are looking for";
//
const serviceRepairEs = {
    title: "Reparación",
    items: [
        "MacBook con líquido derramado",
        "Teclado o trackpad sin funcionar",
        "MacBook o iMac sin encender",
        "Pantalla dañada",
        "Problemas con Wifi y Bluetooth",
        "Cargador dañado",
    ],
};

const serviceRepairEn = {
    title: "Repair    ",
    items: [
        "Spilled liquid on MacBook",
        "Not working keyboard or trackpad",
        "Non starting MacBook or iMac",
        "Screen damage",
        "Wifi and Bluetooth problems",
        "Damaged charger",
    ],
};
//

const serviceMaintenanceEs = {
    title: "Mantenimiento",
    items: ["Limpieza del equipo", "Cambio de pasta térmica", "Eliminación de humedad y corrosión"],
};

const serviceMaintenanceEn = {
    title: "Mantenimiento",
    items: ["Limpieza del equipo", "Cambio de pasta térmica", "Eliminación de humedad y corrosión"],
};

//
const serviceDiagnoseEs = {
    title: "Diagnóstico gratuito",
    body: "Ud. no necesita abonar dinero alguno. Desarmamos su equipo y le comunicamos las posibles causas de la rotura. Tendrá un estimado del precio de la reparación.",
};

const serviceDiagnoseEn = {
    title: "Free Troubleshooting",
    body: "You don't need to pay anything for Troubleshooting. We disassemble your machine and then we tell you the posible origin of the problem. You will have an estimate for the repair.",
};
//
const serviceUpgradeEs = {
    title: "Upgrade",
    items: [
        "Cambiamos y mejoramos componentes clave para el rendimiento de su equipo (RAM, Disco Duro)",
        "Instalación de disco de estado sólido o Fusion Drive en iMac",
    ],
};

const serviceUpgradeEn = {
    title: "Upgrade",
    items: [
        "Cambiamos y mejoramos componentes clave para el rendimiento de su equipo (RAM, Disco Duro)",
        "Instalación de disco de estado sólido o Fusion Drive en iMac",
    ],
};
//
const warrantyEs = {
    title: "Garantía",
    body: "En Railab ud. tendrá un mes mínimo de garantía. Trabajamos para ofrecerle la tranquilidad de que el equipo no regresará al taller.",
};

const warrantyEn = {
    title: "Warranty",
    body: "In Railab you will have a hole month at least of Warranty. We work for offer you the tranquillity of your Mac is not going back to the workshop.",
};
//

const softwareEn = {
    title: "Software",
    items: ["We install macOs and apps", "We also install Windows on the Mac"],
};

const softwareEs = {
    title: "Software",
    items: ["Instalación de sistemas operativos macOs y aplicaciones", "Instalación de Windows en Mac"],
};

//
const rentalEs = {
    title: "Alquiler de equipos",
    body: "Si necesita un Mac por cierto período de tiempo intentaremos proporcionarle el equipo adecuado para la actividad que le ocupa. Con el alquiler del Mac se incluye soporte técnico, software y asesoría.",
};

const rentalEn = {
    title: "Equipment rental",
    body: "If you need a Mac for a certain period of time we will try to provide you with the appropriate equipment for the activity at hand. Technical support, software and advice are included with the Mac rental.",
};

//

const moneyEs = {
    title: "Gane dinero con Railab",
    body: "Compramos Mac rotas para obtener componentes y partes necesarias para nuestro trabajo. Ud. obtiene dinero por un equipo en desuso y nosotros aseguramos que haya un Mac menos en algún basurero del país.",
};

const moneyEn = {
    title: "Make money with Railab",
    body: "We buy broken Macs to obtain components and parts we need to do our job. You make some money for your unused Mac and we ensure one less machine on the trash.",
};

export function Services() {
    const lang = useLangContext();
    const mainHeading = lang == "en" ? headingEn : headingEs;
    const serviceRepair = lang == "en" ? serviceRepairEn : serviceRepairEs;
    const serviceMaintenance = lang == "es" ? serviceMaintenanceEs : serviceMaintenanceEn;
    const serviceDiagnose = lang == "es" ? serviceDiagnoseEs : serviceDiagnoseEn;
    const serviceUpgrade = lang == "es" ? serviceUpgradeEs : serviceUpgradeEn;
    const warranty = lang == "es" ? warrantyEs : warrantyEn;
    const software = lang == "es" ? softwareEs : softwareEn;
    const rental = lang == "es" ? rentalEs : rentalEn;
    const money = lang == "es" ? moneyEs : moneyEn;
    return (
        <section
            id='services'
            className='grid gap-10'
        >
            <h2 className='font-extrabold text-4xl'>{mainHeading}</h2>

            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-10'>
                {/* repair */}
                <div className='grid gap-6'>
                    <div className='from-teal-400 to-cyan-800 w-12 h-12 rounded-2xl shadow-md bg-gradient-to-br flex items-center justify-center'>
                        <Cog6ToothIcon
                            className='text-white size-8'
                            strokeWidth={2}
                            aria-hidden
                        />
                    </div>
                    <div className='grid gap-4'>
                        <h3 className='font-extrabold text-3xl'>{serviceRepair.title}</h3>

                        <ul className='list-disc pl-5 text-opacity-80 text-lg'>
                            {serviceRepair.items.map((item) => (
                                <li
                                    key={item}
                                    className=''
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* mantenimiento */}
                <div className=''>
                    <div className='from-cyan-400 to-blue-800 w-12 h-12 rounded-2xl shadow-md bg-gradient-to-br flex items-center justify-center'>
                        <ArrowPathIcon
                            className='text-white size-8'
                            strokeWidth={2}
                            aria-hidden
                        />
                    </div>
                    <div className='mt-6 '>
                        <h3 className='font-extrabold text-3xl'>{serviceMaintenance.title}</h3>

                        <ul className='mt-4 list-disc pl-5 text-opacity-80 text-lg'>
                            {serviceMaintenance.items.map((item) => (
                                <li
                                    key={item}
                                    className=''
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* diagnostico */}
                <div className=''>
                    <div className='from-purple-400 to-indigo-800 w-12 h-12 rounded-2xl shadow-md bg-gradient-to-br flex items-center justify-center'>
                        <EyeIcon
                            className='text-white size-8'
                            strokeWidth={2}
                            aria-hidden
                        />
                    </div>
                    <div className='mt-6 '>
                        <h3 className='font-extrabold text-3xl'>{serviceDiagnose.title}</h3>

                        <p className='mt-4  text-opacity-80 text-lg'>{serviceDiagnose.body}</p>
                    </div>
                </div>

                {/* upgrade */}
                <div className=''>
                    <div className='from-pink-400 to-red-800 w-12 h-12 rounded-2xl shadow-md bg-gradient-to-br flex items-center justify-center'>
                        <ArrowTrendingUpIcon
                            className='text-white size-8'
                            strokeWidth={2}
                            aria-hidden
                        />
                    </div>
                    <div className='mt-6 '>
                        <h3 className='font-extrabold text-3xl'>{serviceUpgrade.title}</h3>

                        <ul className='mt-4 list-disc pl-5 text-opacity-80 text-lg'>
                            {serviceUpgrade.items.map((item) => (
                                <li
                                    key={item}
                                    className=''
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* warranty */}
                <div className=''>
                    <div className='from-indigo-400 to-fuchsia-800 w-12 h-12 rounded-2xl shadow-md bg-gradient-to-br flex items-center justify-center'>
                        <CheckBadgeIcon
                            className='text-white size-8'
                            strokeWidth={2}
                            aria-hidden
                        />
                    </div>
                    <div className='mt-6 '>
                        <h3 className='font-extrabold text-3xl'>{warranty.title}</h3>
                        <p className='mt-4  text-opacity-80 text-lg'>{warranty.body}</p>
                    </div>
                </div>

                {/* software */}
                <div className=''>
                    <div className='from-cyan-400 to-blue-800 w-12 h-12 rounded-2xl shadow-md bg-gradient-to-br flex items-center justify-center'>
                        <ArrowPathIcon
                            className='text-white size-8'
                            strokeWidth={2}
                            aria-hidden
                        />
                    </div>
                    <div className='mt-6 '>
                        <h3 className='font-extrabold text-3xl'>{software.title}</h3>

                        <ul className='mt-4 list-disc pl-5 text-opacity-80 text-lg'>
                            {software.items.map((item) => (
                                <li
                                    key={item}
                                    className=''
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* rental */}
                <div className=''>
                    <div className='from-rose-500 to-orange-800 w-12 h-12 rounded-2xl shadow-md bg-gradient-to-br flex items-center justify-center'>
                        <ComputerDesktopIcon
                            className='text-white size-8'
                            strokeWidth={2}
                            aria-hidden
                        />
                    </div>
                    <div className='mt-6 '>
                        <h3 className='font-extrabold text-3xl'>{rental.title}</h3>
                        <p className='mt-4  text-opacity-80 text-lg'>{rental.body}</p>
                    </div>
                </div>

                {/* rental */}
                <div className=''>
                    <div className='from-lime-400 to-emerald-800 w-12 h-12 rounded-2xl shadow-md bg-gradient-to-br flex items-center justify-center'>
                        <CurrencyDollarIcon
                            className='text-white size-8'
                            strokeWidth={2}
                            aria-hidden
                        />
                    </div>
                    <div className='mt-6 '>
                        <h3 className='font-extrabold text-3xl'>{money.title}</h3>
                        <p className='mt-4  text-opacity-80 text-lg'>{money.body}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
