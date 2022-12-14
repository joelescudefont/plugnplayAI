import { Group, Text, useMantineTheme } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

const AUDIO_MIME_TYPE = ("audio/mpeg")

function AudioDropzone(props) {
    const { setAudioFile } = props;
    const theme = useMantineTheme();

    return (
        <Dropzone
            onDrop={(files) => {
                console.log('accepted files', files);
                setAudioFile(files);
            }}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={3 * 1024 ** 2}
            accept={AUDIO_MIME_TYPE}
            {...props}
        >
            <Group position="center" spacing="xl" style={{ pointerEvents: 'none' }}>
                <Dropzone.Accept>
                    <IconUpload
                        size={50}
                        stroke={1.5}
                        color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
                    />
                </Dropzone.Accept>
                <Dropzone.Reject>
                    <IconX
                        size={50}
                        stroke={1.5}
                        color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                    />
                </Dropzone.Reject>
                <Dropzone.Idle>
                    <IconPhoto size={50} stroke={1.5} />
                </Dropzone.Idle>

                <div>
                    <Text size="xl" inline style={{ textAlign: 'center' }}>
                        Drag audio file here or click to select audio files
                    </Text>
                </div>
            </Group>
        </Dropzone>
    );
}

export default AudioDropzone;