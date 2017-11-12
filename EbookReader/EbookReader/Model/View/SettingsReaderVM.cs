﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using EbookReader.Provider;
using Xamarin.Forms;

namespace EbookReader.Model.View {
    public class SettingsReaderVM {

        public SettingsReaderVM() {
            FontSize = new FontSizeVM();
            Margin = new MarginVM();
        }

        public FontSizeVM FontSize { get; set; }

        public MarginVM Margin { get; set; }
    }
}
